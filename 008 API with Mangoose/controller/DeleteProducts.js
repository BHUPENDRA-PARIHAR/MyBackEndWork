const { existsSync } = require("fs");
const Products = require("../models/users");
const path = require('path');
const fs = require('fs');

const DeleteProduct = async(req, res)=>{
    try{
        // console.log(req.params._id);
        const response = await Products.findById(req.params._id);

        if(!response) return res.status(404).json({message:'data not found'});

        console.log(response);
        response.images.forEach((image)=>{
            if(existsSync(path.join('uploads',image))){
            fs.unlinkSync(path.join('uploads', image))
        }        
        })
        if(existsSync(path.join('uploads',response.thumbnail))){
            fs.unlinkSync(path.join('uploads', response.thumbnail))
        }   
         const data = await Products.deleteOne(req.params);   
        
        res.status(200).json({message:'deta delete successfully',data:data})
    }
    catch(error){
        if(error.kind) return res.status(403).json({message:'please enter a valied id'})
        res.status(500).json({message:'internal server error'})
    }
};

module.exports = DeleteProduct;