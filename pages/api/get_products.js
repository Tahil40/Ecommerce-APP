import Product from "@/models/product";
import ConnectDatabase from "@/middleware/mongoose";
                         
const handler = async (req, res) => {
    // await ConnectDatabase(); 
    let product_variable = await Product.find();
    let products_data = {}
    for(let item of product_variable){
        // console.log(item);                                    
        if(item.title in products_data){
            if(!products_data[item.title].color.includes(item.color) && item.availableQty > 0){ 
                products_data[item.title].color.push(item.color); 
            }
            if(!products_data[item.title].size.includes(item.size) && item.availableQty > 0){
                products_data[item.title].size.push(item.size); 
            }
        }
        else{
            products_data[item.title] = JSON.parse(JSON.stringify(item));
            if(item.availableQty > 0){
                products_data[item.title].color = [item.color]; 
                products_data[item.title].size = [item.size]; 
            }
        }
    }
    // res.status(200).json({product_variable});
    res.status(200).json({products_data});
}
                   
export default ConnectDatabase(handler);
// export default handler;  