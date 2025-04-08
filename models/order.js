const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({             
    email: {type: String, required: true}, 
    order_id: {type: String, required: true},
    payment_info: {type: String, default:''}, 
    products: {type: Object, required:true},
    address: {type: String, required: true}, 
    amount: {type: Number, required: true}, 
    status: {type: String, required:true, default: 'Pending'}

}, {timeStamps: true}); 

export default mongoose.models.Order || mongoose.model("Order", OrderSchema); 