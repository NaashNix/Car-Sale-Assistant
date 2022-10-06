const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
   name : {
      type : String,
      require : true
   },
   email : {
      type : String
   },
   username : {
      type : String,
      require : true,
      default : 'none'
   },
   password : {
      type : String,
      require : true,
      default : 'none'
   }
})

module.exports = mongoose.model('User',UserSchema);