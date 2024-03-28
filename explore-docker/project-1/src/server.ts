import express from "express";
const app = express();
const port = 5000;

app.use(express.json());

app.use("/", express.static("public"));

app.get("/up", (req, res) => {
  res.send("Hello World bd!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
