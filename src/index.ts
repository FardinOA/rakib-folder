import "dotenv/config";
import { Express, Request, Response } from "express";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const folderRoute = require("./routes/folders");
const app = express();

//connect to db
mongoose
    .connect(process.env.DB_URL!)
    .then(() => {
        console.log("MONGOOSE IS SUCCESSFULLY CONNECTED!");
    })
    .catch((err) => {
        console.log(err);
    });

//middlewares
//we should use them before routes
app.use(
    cors({
        origin: "https://techstack.onrender.com",
    })
);
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

//routes
app.use("/api/folders", folderRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`BACKEND SERVER IS RUNNING ON ${PORT}`);
});
