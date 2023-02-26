const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');
const cors = require('cors')

// Middlewares
app.use(express.urlencoded());
app.use(cors());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here
app.get("/data" , async(req,res) => {
    const demo = await 
    marioModel.find()
    res.json({ data :demo
    })
})

app.get("/data/:id", async (req,res) => {
      const id = req.params.id;
    try{
        const mario = await marioModel.findById(id)
        res.json({
             data :mario
        })
    }catch(error){
        res.status(400).json({
           message:error.message 
        })
    }
})

app.post("/data", async(req,res) => {
   
    const { name,location,likes,description,postimage} = req.body;
    if (!name || !description || !postimage || !location){
        res.status(400).json({ message: 'Something is missing' })
    }
    else{

    try{
        const newMario =new marioModel({name,location,likes,description,postimage});
        await newMario.save();
        res.status(201).json(newMario);

    }catch(error){
        res.status(400).json(
            { message: error.message }
    )
    }}

})







module.exports = app;