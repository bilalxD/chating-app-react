// import packages
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"; 

// import routes 
import messageRoutes from "./Routes/message.routes.js";
import authRoutes from "./Routes/auth.routes.js";
import userRoutes from "./Routes/user.routes.js";

// database routes
import DB from "./db/database.js";


const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());



// middlewares
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes)
app.use("/api/users", userRoutes)




// app.post("/", (req, res) => {

// });

app.listen(PORT, () => {
  DB();
  console.log(`Server Is Running on port ${PORT}`);
});
