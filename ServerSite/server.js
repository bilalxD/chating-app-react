import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/auth.routes.js";
import DB from "./db/database.js";


const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use("/api/auth", authRoutes);


// app.get("/", (req, res) => {
//   res.json("hello World");
// });

app.listen(PORT, () => {
  DB();
  console.log(`Server Is Running on port ${PORT}`);
});
