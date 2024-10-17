import mongoose from "mongoose"

// Creating Schema
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,

})

// Creating Model
export const Product =  mongoose.model("product", productSchema)