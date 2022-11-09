const express = require('express');
const mongoose = require('mongoose')
const app = express();
const todoRoutes = require('./routes/todo')

app.use(express.json());
app.use('/todo', todoRoutes);

require('dotenv').config()
const port = process.env.PORT; 

mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("Mongodb Connceted successfully")
}).catch(err => {
    console.log(err)
});

app.get('/',(req,res)=> res.json({'message':'server is running'}));

app.listen(process.env.port,()=>console.log(`server is running at ${port}`));