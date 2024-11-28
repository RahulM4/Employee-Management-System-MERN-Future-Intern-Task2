import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`MongoDB connection Successful!!`);


    } catch (error) {
        console.log("MONGODB Connection Failed", error);
    }
}


export default connectDB;