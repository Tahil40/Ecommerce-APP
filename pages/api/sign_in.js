import User from "@/models/user";
import ConnectDatabase from "@/middleware/mongoose";
const Cryptojs = require('crypto-js');
const jwt = require('jsonwebtoken');

const handler = async(req, res)=>{
    if(req.method=="POST"){
        const user_email = await User.findOne({email: req.body.email});
        const user_password_authenticate = user_email.password;
        // const user_password_decrypt = Cryptojs.AES.decrypt(user_password_authenticate, 'secretkey').JSON.parse(toString(Cryptojs.enc.Utf8));
        const user_password_decrypt = Cryptojs.AES.decrypt(user_password_authenticate, 'secretkey').toString(Cryptojs.enc.Utf8);
        if(user_email.email && user_password_decrypt){
            try{
                if(req.body.email===user_email.email && req.body.  password===user_password_decrypt){
                let token = jwt.sign({success: true, email:user_email, password:user_email.password}, 'jwtsecret', {expiresIn:"2d"});
                res.status(200).json({success: "login Successfull...", token}); 
            }
            else{  
                res.status(400).json({error: "login unsuccessfull..."});
            }}catch(error){
                res.status(400).json({error: "login unsuccessfull..."});
            }
        }

        res.status(200).json({success: "Request Successfull...."}); 
    }
    else{
        res.status(400).json({error:"Invalid Request....."}); 
    }
}

export default ConnectDatabase(handler);