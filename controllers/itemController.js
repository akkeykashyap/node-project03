const Item = require('../models/Item');


// Get all items
exports.getAllItem = async (req,res)=>{
    try{
        const items = await Item.find();
        res.render('index',{items});
    }catch(error){
        res.status(500).send("error retreving items");
    };
};

//Add new Item
exports.addItem = async(req,res)=>{
    const {name ,description} = req.body;
    try{
        const newItems = new Item ({name , description });
        await newItems.save();
        res.redirect('/');
    }catch(error){
        res.status(500).send("error")
    };
};
