const DB = require('./DB');
const express = require('express');
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 2000;

const db = new DB();

db.connectToMongoose();

app.use("/user", userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});