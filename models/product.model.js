const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
   name:String,
   price:Number,
   image:[String],
   description:String,
   category:String,
   subcategory:String,
   district:String,
   area:String,
   block:String,
   address:String,
   phone:String,
   whatsapp:String,
   hideidentity:String,
   owner:String,
   likes:{
    count:Number,
    users:[String]
   },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);