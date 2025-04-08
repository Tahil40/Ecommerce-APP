const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true}, 
    email: {type: String, required: true, unique: true}, 
    password: {type: String, required: true, unique: true}
    
}, {timeStamps: true}); 

delete mongoose.models.User;
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User; 