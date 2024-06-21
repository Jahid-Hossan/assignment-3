import express from "express";
import cookieParser from "cookie-parser";
import router from "./app/router";
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;