process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';
import { resolve } from "path";
import dotenv = require ('dotenv');
dotenv.config({
   path: resolve(`${__dirname}/../.env`),
});
import express = require("express");
import { loadControllers } from "awilix-express";
import cors from "cors";
import morgan from "morgan";
import connect from "../database";


const app: express.Application = express();

// // JSON Support
app.use(express.json());
//dotenv.config();

connect();
// // CORS Support
app.use(cors());
app.use(morgan("dev"));

// // Controllers
app.use(loadControllers("controllers/*.ts", { cwd: __dirname }));

export  {app};
