const express = require('express');
const cors = require('cors');
const bcrypt=require('bcryptjs')
require('./Database/config');
const User = require('./Database/Usermodel');
const Product=require('./Database/Productmodel');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/register',async (req,res)=>{
    try {
        const {Name,Email,Password,Mobile}=req.body;
        const existuser=await User.findOne({Email})
        if(existuser){
            return res.status(400).json({message:"user already exist"})

        }
        const hashedpassword=await bcrypt.hash(Password,10);

        const user= new User({Name,Email,Password:hashedpassword})
        await user.save()

        res.json({message:"User registered successfully"})
         
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }

});
   
app.post('/login',async (req,res)=>{
   try {
     const {Email,Password}=req.body;

    const user=await User.findOne({Email})
    if(!user){
        return res.status(400).json({message:"user not found"})
    }
    const ismatch= await  bcrypt.compare(Password,user.Password)
    if(!ismatch){
        return res.status(400).json({message:"inavlid credentials"})
    }
    res.send(user)
   } catch (error) {
    res.status(500).json({error:error.message})
   }
})

app.post('/addproduct',async (req,res)=>{
    let product = Product(req.body)
    let result=product.save()
    res.send(result)
})

app.listen(3000,()=>{
    console.log("Server is running at port 3000");
})