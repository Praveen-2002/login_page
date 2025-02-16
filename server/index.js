import DB from "./DB.js"
import express from "express"
import authRoutes from "./routes/authRoutes.js"
import cors from "cors"
import {CLIENT_URL} from './env.js'

const app = express();
const port = 2000;

const db = new DB();

const corsOptions = {
  origin: CLIENT_URL, // This will allow the reaquest from the client
  credentials: true // This allows the session cookie to be sent back and forth
};

app.use(cors(corsOptions));
app.use(express.json());


app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, async() => {
  console.log(`Example app listening at http://localhost:${port}`);
  await db.connectToMongoose();
});