const mongoose = require('mongoose');

const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://divyanshudc:divyanshudc@cluster0.bmyq4.mongodb.net/HackTogether");
};

module.exports = connectDB;