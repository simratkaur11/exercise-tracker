const express=require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;
console.log("MONG URI:",uri);
mongoose.connect(uri);
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("mongo db database connection established successfully");
});

const exercisesRouter = require('./routes/exercises');
const userRouter= require('./routes/users');

app.use('/exercises',exercisesRouter);
app.use('/users',userRouter);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});