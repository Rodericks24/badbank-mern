const mongoose = require('mongoose');
const hodSchema=new mongoose.Schema({
    name: String,
    department: String,
    email: String
});


const Hod= new mongoose.model("Hod",hodSchema);
module.exports = Hod;