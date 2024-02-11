import mongoose from "mongoose";

const mongooseDatabase = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Database Connected")
    }catch(error){
        console.log("Error Connecting to database",error);
    }
}

export default mongooseDatabase;