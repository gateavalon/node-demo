const mongoose = require('mongoose');
const productsSchema = new mongoose.Schema({

   //  _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Products', productsSchema);