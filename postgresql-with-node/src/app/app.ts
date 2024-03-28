import express, { Request, Response } from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/upload-file", (req: Request, res: Response) => {});

export default app;
