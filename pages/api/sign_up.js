import user from "@/models/user";
import ConnectDatabase from "@/middleware/mongoose";
// import cryptoJs from "crypto-js";
const Cryptojs = require('crypto-js');

const handler = async (req, res) => {
    try{
    if(req.method=="POST"){
        const {username, email} = req.body;//getting data from request's body.... 
        let user_create = new user({username, email, password: Cryptojs.AES.encrypt(req.body.password, "secretkey").toString()});//creating new user object.... 
        await user_create.save();//saving the user object to database....

        res.status(200).json({success: "Request is Successfull...."});
    }
    else{
        res.status(400).json({error: "Invalid Request..."}); 
    }}catch(error){
        res.status(500).json({error: "Internal Server Error..."}); 
    }
}

export default ConnectDatabase(handler); 