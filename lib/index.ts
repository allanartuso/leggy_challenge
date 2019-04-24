import app from "./server";
import * as http from "http";
import * as cron from "cron";
const cronJob = cron.CronJob;

const port = process.env.PORT || 3000;
var server = http.createServer(app);
server.listen(port, () => {
  // console.log(`Server is up on ${port}`);
});

/* ----------------------------------------------------------------
                        START SOCKET
  ---------------------------------------------------------------- */
import * as socketIO from "socket.io";
const io = socketIO(server);
import socketEmitter from "./socketEmitter";
socketEmitter.startIO(io)

new cronJob(
  `*/2 * * * * *`,
  () => socketEmitter.emit("test", { data: "test" }),
  null, true
);

/* ----------------------------------------------------------------
                        LIQUIDATION
  ---------------------------------------------------------------- */
import { liquidation } from "./liquidation/start";
import { soldExamples, solds } from "./liquidation/shareHolders";

const res = liquidation({ exits: soldExamples });
console.log(res);