const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:4000/Major")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minLength: [3, "Must contain 3 characters"],
        maxLength: [30, "Cannot exceed 30 characters"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"]
    },
    password: {
        type: String,
        required: true,
        // validate: [validate.isPassword, "Create a stronger password"],
        minLength: [5, "Password must contain 5 characters"],
        maxLength: [50, "Password should not exceed 50 characters"]
    },
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection