const express = require('express')
const mongoose = require('mongoose')
const path = require ('path')
require('dotenv').config();
const itemRoutes = require('./routes/itemRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const contractRoutes = require('./routes/contractRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const connectDB =require('./config/db')

const app =express();


//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Set EJS as the view engine
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

//connect to database
connectDB();

// Use item routes
app.use(itemRoutes);
app.use(aboutRoutes);
app.use(contractRoutes);


//server start
const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`server start at http://localhost:${PORT}`);
});