import app from "./server";
import * as http from "http";

const port = process.env.PORT || 3000;
var server = http.createServer(app);
server.listen(port, () => {
  // console.log(`Server is up on ${port}`);
});

/* ----------------------------------------------------------------
                        LIQUIDATION
  ---------------------------------------------------------------- */
import { liquidation } from "./liquidation/start";
import { soldExamples, solds } from "./liquidation/shareHolders";

const res = liquidation({ exits: solds });
console.log(res);