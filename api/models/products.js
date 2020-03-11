const mongoose = require('mongoose');
const productsSchema = new mongoose.Schema({
   // title: {
   //     type: String,
   //     required: true
   // },
   // description: {
   //     type:String,
   //     required: true
   // },
   // date: {
   //     type: Date,
   //     default: Date.now()
   // }
   //  _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Products', productsSchema);