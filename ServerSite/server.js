import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/auth.routes.js";
import DB from "./db/database.js";


const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());



// middlewares
app.use("/api/auth", authRoutes);



// app.post("/", (req, res) => {

// });

app.listen(PORT, () => {
  DB();
  console.log(`Server Is Running on port ${PORT}`);
});
