const mongoose = require("mongoose"); 

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    // slug: {type: String, required: true, unique: true},
    slug: {type: String, required: true}, 
    desc: {type: String, required: true}, 
    img: {type: String, required: true}, 
    category: {type: String, required: true}, 
    size: {type: [String], required: true}, 
    color: {type: [String], required: true},
    price: {type: Number, required: true}, 
    availableQty: {type: Number, required: true}
    
}, {timeStamps: true});

// mongoose.models = {}
// module.exports = mongoose.models.Product || mongoose.model("Product", ProductSchema); 
export default mongoose.models.Product || mongoose.model("Product", ProductSchema); 