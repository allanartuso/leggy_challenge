
import socketEmitter from "../socketEmitter";
import { liquidation } from "../liquidation/start"
import { Router } from "express";

function apis(router: Router) {
    router.post("/share_holders", (req, res) => res.json(liquidation(req.body)));
}

export default apis;