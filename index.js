const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
require("dotenv").config();
const productRoute = require("./routes/product.route");

mongoose
  .connect(
    `mongodb+srv://admin:${process.env.mongoKey}@cluster0.8hyh8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("connected to mongo");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => console.log("connection to mongo failed"));

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from node api");
});
