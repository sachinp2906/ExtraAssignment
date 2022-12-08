const express = require('express')
const app = express()
const mongoose = require('mongoose')
const route = require('./routes/route')

app.use(express.json())


mongoose.connect('mongodb+srv://sachinfu:2906@sachinfu.fcpe6tc.mongodb.net/sachinfu-db' , {
    useNewUrlParser : true
},mongoose.set('strictQuery', false))
.then(()=>console.log("mongodb is connected"))
.catch(err=>console.log(err))

app.use('/' , route)

app.listen((process.env.PORT || 3000) , function(){
    console.log("express app running on port 3000")
})