let io;
let socketEvents = {};
let socketActive = null;

function startIO(socketIO) {
    if (socketActive == null) {
        io = socketIO;

        io.on("connection", socket => {
            socket.on("subscribe", data => onSubscribe(socket, data));
            socket.on("unsubscribe", data => onUnsubscribe(socket, data));
            socket.on("disconnect", () => console.log("disconnected " + socket.id));
        });

        socketActive = true;
    }
}

function emit(roomName: string, data) {
    socketEvents[roomName] = data;
    io.to(roomName).emit("message", data);
}

function onSubscribe(socket, data) {
    socket.join(data.event);
}

function onUnsubscribe(socket, data) {
    socket.leave(data.event);
}

function getSocketsEvents() {
    return Object.keys(socketEvents);
}

export default { startIO, io, emit, getSocketsEvents };