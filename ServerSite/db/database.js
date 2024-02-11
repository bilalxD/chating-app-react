import mongoose from "mongoose";

const mongooseDatabase = async () =>{
    const Db_name = process.env.MONGO_DB_USER;
    const Db_pass = process.env.MONGO_DB_PASS;
    const DB = process.env.MONGO_DB_DATABSE;
    try{
        await mongoose.connect(`mongodb+srv://${Db_name}:${Db_pass}@cluster0.qwanrdq.mongodb.net/${DB}?retryWrites=true&w=majority`)
        console.log("Database Connected")
    }catch(error){
        console.log("Error Connecting to database",error);
    }
}

export default mongooseDatabase;
