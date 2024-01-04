import express from "express";
import __dirname from "./utils.js";
import { config } from "dotenv";
import cors from "cors";
config();

import mailRouter from "./routes/mail.routes.js";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.use("/api/sendEmail", mailRouter);

const runServer = () => {
  const httpServer = app.listen(
    PORT,
    console.log(`✅Server escuchando in the port: ${PORT}`)
  );
};

runServer();
