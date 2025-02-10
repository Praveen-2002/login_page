import DB from "./DB.js"
import express from "express"
import authRoutes from "./routes/authRoutes.js"

const app = express();
const port = 2000;

const db = new DB();

app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, async() => {
  console.log(`Example app listening at http://localhost:${port}`);
  await db.connectToMongoose();
});