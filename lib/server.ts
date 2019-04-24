import * as express from "express";
const app = express();

import * as bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

import * as cors from "cors";
app.use(cors());
app.options('*', cors());

// API
import routes from "./api/api";
app.use("/api", routes);

// //Static files
app.use(express.static("vue"));
app.use("*", express.static("vue"));

// app.use("/public", express.static("public"));
// app.use(express.static("views"));

export default app;
