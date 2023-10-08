import express, { Request, Response } from "express";
import cors from "cors"
import dotenv from "dotenv"
import routes from "./routes";

const app = express();
dotenv.config({})
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", routes);

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})