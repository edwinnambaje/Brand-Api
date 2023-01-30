const Category=require('../models/Category');

exports.creatCategory=async(req,res)=>{
    const newCat=await Category(req.body);
    try {
        const savedCat=await newCat.save();
        res.status(200).json(savedCat);
    } 
    catch (error) {
        res.status(500).json(error);
    }
}
exports.gettCategory=async(req,res)=>{
    try {
        const cats=await Category.find();
        res.status(200).json(cats);
    } 
    catch (error) {
        res.status(500).json(error);
    }
}
exports.getCategory=async(req,res)=>{
    try {
        const category=await Category.findById(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json(error)
    }
}