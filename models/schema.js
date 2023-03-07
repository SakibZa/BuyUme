const mongoose=require('mongoose');
const schema=new mongoose.Schema({

      productid:
      {
        type:String
      },
      quantity:
      {
        type:String
      }

});
const User=mongoose.model('User',schema);
module.exports=User;