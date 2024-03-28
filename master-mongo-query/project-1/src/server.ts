import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 5000;

app.use(express.json());

const employeeSchema = new mongoose.Schema({}, { strict: false });

const EmployeeModel = mongoose.model("employee", employeeSchema);

app.get("/", async (req, res) => {
  const result = await EmployeeModel.find({});
  res.status(200).json({ results: result.length });
});

app.patch("/perform-query", async (req, res) => {
  const { query, type } = req.body;
  let result;
  let response: { total?: number; result?: any } = {};
  switch (type) {
    case "update":
      result = await EmployeeModel.updateOne(query);
      response = { result };
      break;
    case "delete":
      result = await EmployeeModel.deleteOne(query);
      response = { result };
      break;

    default:
      result = await EmployeeModel.find(query);
      response = { total: result.length, result };
      break;
  }
  res.status(200).json(response);
});

async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/recap");
    console.log("DB connected Successfully");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
