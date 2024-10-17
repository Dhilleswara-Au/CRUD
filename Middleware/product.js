import { Product } from "../Models/product.js"

export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
    
        res.status(200).json({
            success: true,
            product
    })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
    
        res.status(200).json({
            success: true,
            products
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const getProduct = async (req, res) => {
    try {
        const product =await Product.findById(req.params.id)
    
        if (!product) {                                      
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        res.status(200).json({
            success: true,
            product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error
        })
    }
}

export const updateProduct = async (req,res) => {
    try {
        let product = await Product.findById(req.params.id)         
    
        if (!product) {                                            
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        await Product.findByIdAndUpdate(req.params.id, req.body)    
    
        product = await Product.findById(req.params.id)           

        res.status(200).json({
            success: true,
            product
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const deleteProduct = async (req,res) => {
    try {
        const product = await Product.findById(req.params.id)         
    
        if (!product) {                                            
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        
        await product.deleteOne()

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}