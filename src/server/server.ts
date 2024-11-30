import "reflect-metadata";
import express from "express";
import { AppDataSource } from "../config/data-source";


const app = express();
const port = 3000;


app.use(express.json());

const start = async () => {
  try {
    await AppDataSource.initialize();
    app.listen(port, () => console.log(`Server running port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start();