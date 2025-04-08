import Product from "@/models/product";
import ConnectDatabase from "@/middleware/mongoose";

const handler = async (req, res) => {
    if(req.method=="POST"){
        // console.log(req.body); 
        for (let i = 0; i < req.body.length; i++){
            let product_data = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);

            product_data.save();
    }  
    res.status(200).json({success: "API Update Proccess Successfull...."});
    }
    else{
        res.status(200).json({error: "This Method is Not Allowed....."});
    } 
}

export default ConnectDatabase(handler);