import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then((c) => {
        console.log(`Database Connected to ${c.connection.host}`);
    }).catch((e) => {
        console.log(e);
    })
}