const productRepo = require("./prodcut.repository");

const ProductReposiory = new productRepo();

async function createProduct(data) {
    try {
        const unique_SKU = await ProductReposiory.findOne({ sku: data.sku });
        if (unique_SKU) {
            console.error("Sku must be unique");
            throw new Error("Sku must be unique");
        }
        // const exist_supplier;//this part need to implemented later when supplier will be exist 
        if (data.purchasePrice < 0 || data.sellingPrice < 0) {
            console.error("purcashe price & sellingPrice must be greater than 0 ");
            throw new Error("purcashe price & sellingPrice must be greater than 0");
        }
        const responce = await ProductReposiory.createdata(data);
        return responce;
    } catch (error) {
        console.error("Error to create product-service ", error);
        throw error;
    }

}
async function  getALlProducts() {
    try {
        const responce = await ProductReposiory.findallProducts();
        return responce;
    } catch (error) {
        console.error("Error to get all product-service ", error);
        throw error;
    }
}

module.exports= {
    createProduct,
    getALlProducts
}