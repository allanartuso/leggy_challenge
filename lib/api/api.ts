import * as express from "express";
const router = express.Router();

import liquidation from "./liquidation";
liquidation(router);

export default router;
