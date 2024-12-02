const mongoose = require('mongoose')

// Define the Contact Schema
const ContractSchma =new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Contract = mongoose.model('Contract' ,ContractSchma);

module.exports = Contract;