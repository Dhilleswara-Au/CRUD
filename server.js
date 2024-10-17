import { connectDB } from "./data/database.js";
import { app } from "./app.js";
import dotenv from "dotenv"

connectDB()

// Listening to the server
app.listen(process.env.PORT, () => {
    console.log(`Server Started at port ${process.env.PORT}`);
})
