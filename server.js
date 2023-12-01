const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const User = require('./models/userModel')
const app = express();
const validate = require('./utils')

app.use(express.json())
app.use(cors({
    origin: '*'
}));

mongoose
.connect('mongodb+srv://admin:sapiens123@cluster0.6tvtyir.mongodb.net/User-API?retryWrites=true&w=majority')
.then(()=>{
    console.log('Connected to MongoDB')
    app.listen(4000, ()=>{
        console.log('API app running port 4000')
    })
})
.catch((error)=>{
console.log(error)
})

app.get('/',(req,res) =>{
    res.send('Hello APIs')
})

app.get('/users', async (req,res) =>{
    try{
      const users = await User.find({}).sort( { "createdAt": -1 } );
      res.status(200).json(users);
    } catch(error){
      res.status(500).json({message: error.message})
    }
})

app.post('/user', async (req,res) =>{
    try{
        const {error, errorMessage} = validate(req)
        const userExist = await User.findOne({email: req?.body?.email.toLowerCase()})
        if(error){
            res.status(400).json({message: errorMessage})
        }
        else if(userExist){
            res.status(400).json({message: `${req?.body?.email} already exists!`})
        } else {
            const user = await User.create(req.body);
            res.status(200).json(user);
        }
    } catch(error){
        res.status(500).json({message: error.message})
    }
})