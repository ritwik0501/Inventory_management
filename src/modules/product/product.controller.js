const { get } = require("../../app");
const prodcutService = require("./prodcut.service");


async function createProductController(req, res) {
    try {
        const responce = await prodcutService.createProduct({
            sku: req.body.sku,
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            supplierId: req.body.supplierId,
            purchasePrice: req.body.purchasePrice,
            sellingPrice: req.body.sellingPrice,
            isActive: req.body.isActive
        })

        res.status(200).json({
            success: true,
            message: "Prodcut Created Successfully",
            data: responce,
            error: {}
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "unable to create data",
            data: {},
            error
        })
    }
}
async function getALlProductsController(req, res) {
    try {
        const responce = await prodcutService.getALlProducts();
        res.status(200).json({
            status: true,
            message: "All products showed",
            data: responce,
            error:{}
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "unable to get all data",
            data: {},
            error
        })
    }
}

module.exports = { createProductController, getALlProductsController }