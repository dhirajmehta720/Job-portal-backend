import express from "express"
const app = express();
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import cors from "cors";
import morgan from "morgan";
import authRoute from "./routes/auth.routes.js";

connectDB();

dotenv.config({path: "./.env"});
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoute)

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})