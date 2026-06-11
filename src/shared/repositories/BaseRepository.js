class BaseRepo{
    constructor(model){
        this.model=model;
    }

    async createdata(data){
        try {
            const responce= await this.model.create(data);
            return responce;

        } catch (error) {
            console.error("Cannot able to create data",error);
            throw error
        }
    }
    async findById(id){
        try {
            const responce = await this.model.findById(id);
            return responce;
        } catch (error) {
            console.error("Cannot find data",error);
            throw error;
        }
    }
     async findOne(filter){
        try {
            const responce= await this.model.findOne(filter);
            return responce;
        } catch (error) {
            console.error("Cannot able to find data ", error);
            throw error;
        }
     }
     async findAll(filter,otpion){
        try {
            const responce = await this.model.find(filter,null,otpion);
            return responce;
        } catch (error) {
            console.error("unable to finall data ", error);
            throw error;
        }
     }
     async updateById(id,update){
        try {
            const responce = await this.model.findByIdAndUpdate(id,update,{new:true});
            return responce;
        } catch (error) {
            console.error("Unable to do UpdateById");
            throw error;
        }

     };
     async updateOne(filter,update){
        try {
            const responce= await this.model.findOneAndUpdate(filter,update,{new:true});
            return responce;
        } catch (error) {
            console.error("Failed to do UpdateOne operatiom",error);
            throw error;            
        }
     };
     async deleteById(id){
        try {
            const responce= await  this.model.findByIdAndDelete(id);
            return responce;
        } catch (error) {
            console.error("Unable to do Delete Operation",error);
            throw error;
        }
     };
     async deleteOne(filter){
        try {
            const responce= await this.model.deleteOne(filter);
            return responce;
        } catch (error) {
            console.error("Unable to do deleteOne operation",error);
            throw error;
        }
     };
     async count(filter){
        try {
            const responce= await this.model.countDocuments(filter);
            return responce;
        } catch (error) {
            console.log("unable to do count operation",error);
            throw error;
        }
     };
}

module.exports= BaseRepo;