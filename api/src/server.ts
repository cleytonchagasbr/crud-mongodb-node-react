import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(routes);

const port = 3000;

mongoose.connect("mongodb://localhost:27017/mongodb");

app.listen(port, () => {
    console.log('server started!');
});