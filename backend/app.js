import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {dbConnection} from "./config/dbConnect.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoutes.js";
dotenv.config({path:"./config/config.env"});
const app = express();
//allowing cross origin request from our frontend 
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    method:["POST"],
    credentials:true
}));
//allowing use of JSON input from Request
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/reservation',reservationRouter);
dbConnection();
app.use(errorMiddleware);
export default app;