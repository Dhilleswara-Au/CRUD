import express from "express"
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../Middleware/product.js"

const router = express.Router()

// Creating Product
router.post("/new", createProduct)

// Reading all the products
router.get("/all", getAllProducts)

// Read, Update and Delete product by id
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct)

export default router;