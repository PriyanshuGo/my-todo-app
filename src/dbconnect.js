import mongoose from "mongoose";

const dbconnect = () =>{
    try {
        mongoose.connect(process.env.MONGOURL);
        console.log("database connected");
    } catch (error) {
        console.log("error")
    }
}

export default dbconnect;