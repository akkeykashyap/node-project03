const Contract = require("../models/Contract");

exports.getContactPage = (req, res) => {
    res.render('contract'); // 'contact' should match the name of your view file (contact.ejs)
  };

exports.handleContactForm =async (req,res)=>{
    const {name,email, message} = req.body;

    try{
        const newContract = new Contract({
            name,
            email,
            message,
        });

        await newContract.save();

        res.send('Thank you for your message! We will get back to you soon.')
    }catch(error){
        console.error('Error saving contact:', err);
        res.status(500).send('There was an error saving your contact information. Please try again later.');
    }
    
}
