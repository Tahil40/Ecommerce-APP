import Product from "@/models/product";
import ConnectDatabase from "@/middleware/mongoose";
                                                                              
const handler = async(req, res) => {
    if(req.method==="POST"){
        // console.log(req.body);
        for(let i=0; i<req.body.length; i++){
            let product_data = new Product({
                title: req.body[i].title, 
                slug: req.body[i].slug, 
                desc: req.body[i].desc, 
                img: req.body[i].img, 
                category: req.body[i].category,
                size: req.body[i].size, 
                color: req.body[i].color,
                price: req.body[i].price,
                availableQty: req.body[i].availableQty 
            })
            await product_data.save();
        }
        res.status(200).json({success:"API data Adding Request Successfull........"});
    }
    else{
        res.status(400).json({error: "This Method is Not allowed...."});
    }
}

export default ConnectDatabase(handler); 