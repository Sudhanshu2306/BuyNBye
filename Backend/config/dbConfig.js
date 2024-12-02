import mongoose from "mongoose"
export const ConnectDB = async () => {
    try{
        console.log(process.env.DBNAME)

        const conn = await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DBNAME}`);
        
        console.log(`MongoDB is Connected!! ${conn.connection.host}`);

    }catch(error){
        console.log("Error has occured while connecting to mongodb",error)
        process.exit(1);
    }
};