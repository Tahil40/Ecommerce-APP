import user from "@/models/user";
import ConnectDatabase from "@/middleware/mongoose";
// import cryptoJs from "crypto-js";
const Cryptojs = require('crypto-js');

const handler = async (req, res) => {
    if(req.method=="POST"){
        // console.log(req.body); 
        // let user_create = new user(req.body);
        const {name, email} = req.body; 
        let user_create = new user({name, email, password: Cryptojs.AES.encrypt(req.body.password, "secretkey").toString()});
        await user_create.save();

        res.status(200).json({success: "Request is Successfull...."});
    }
    else{
        res.status(400).json({error: "Invalid Request..."}); 
    }
}

export default ConnectDatabase(handler); 