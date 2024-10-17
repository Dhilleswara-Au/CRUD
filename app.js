import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import productRouter from "./Routes/product.js";
import dotenv from "dotenv";

// Creating app
export const app = express();

dotenv.config({
    path: "./data/config.env",
})

// Using Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())

// routes
app.use("/api/v1/products", productRouter)

// Home
app.get("/", (req,res) => {
    res.send("<h1>HOME PAGE</h1>")
})

