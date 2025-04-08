import mongoose from "mongoose";

const ConnectDatabase = handler => async (req, res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req, res);
    }
    else{
        await mongoose.connect(process.env.MONGOOSE_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        return handler(req, res); 
    }
}

export default ConnectDatabase; 