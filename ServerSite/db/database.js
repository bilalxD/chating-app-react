import mongoose from "mongoose";

const mongooseDatabase = async () =>{
    const Db_name = process.env.MONGO_DB_USER;
    const Db_pass = process.env.MONGO_DB_PASS;
    const DB = process.env.MONGO_DB_DATABSE;
    try{
        await mongoose.connect(`mongodb://${Db_name}:${Db_pass}@ac-q5c0d21-shard-00-00.qwanrdq.mongodb.net:27017,ac-q5c0d21-shard-00-01.qwanrdq.mongodb.net:27017,ac-q5c0d21-shard-00-02.qwanrdq.mongodb.net:27017/?ssl=true&replicaSet=atlas-pih5ex-shard-0&authSource=admin&retryWrites=true&w=majority`)
        console.log("Database Connected")
    }catch(error){
        console.log("Error Connecting to database",error);
    }
}

export default mongooseDatabase;
