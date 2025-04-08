import User from "@/models/user";
import ConnectDatabase from "@/middleware/mongoose";
const Cryptojs = require('crypto-js');
const jwt = require('jsonwebtoken');

const handler = async(req, res)=>{
    if(req.method=="POST"){
        // console.log(req.body);
        const user_email = await User.findOne({email: req.body.email});
        const user_password_authenticate = user_email.password;
        // const user_password_decrypt = Cryptojs.AES.decrypt(user_password_authenticate, 'secretkey').JSON.parse(toString(Cryptojs.enc.Utf8));
        const user_password_decrypt = Cryptojs.AES.decrypt(user_password_authenticate, 'secretkey');
        // console.log(user_email.email, user_email.password);
        // const user_password = await User.findOne({password: req.body.password});
        // console.log(user_email.email, user_password.password); 
        // console.log(req.body.email, req.body.password); 
        if(user_email.email && user_password_decrypt){
            if(req.body.email==user_email.email && req.body.  password==user_password_decrypt){
                let token = jwt.sign({success: true, email:user_email, password:user_email.password}, 'jwtsecret', {expiresIn:"2d"});
                console.log(token);
                res.status(200).json({success: "login Successfull...", token}); 
            }
            else{  
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