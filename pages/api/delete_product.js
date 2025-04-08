import Product from "@/models/product";
import ConnectDatabase from "@/middleware/mongoose";

const handler = async (req, res) => {
    if(req.method=="POST"){
        // console.log(req.body); 
        for (let i = 0; i < req.body.length; i++){
            await Product.findByIdAndDelete(req.body[i]._id, req.body[i]);
    }  
    res.status(200).json({success: "API Delete Proccess Successfull...."});
    }
    else{
        res.status(200).json({error: "This Method is Not Allowed....."});
    } 
}

export default ConnectDatabase(handler);