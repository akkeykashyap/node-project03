const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connect successfully");   
    }catch(err){
        console.err("connection problem", err);
        process.exit(1);   
    };
};

module.exports = connectDB;