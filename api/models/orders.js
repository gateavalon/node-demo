const mongoose = require('mongoose');
const ordersSchema = new mongoose.Schema({

   //  _id: mongoose.Schema.Types.ObjectId,
    product: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Orders', ordersSchema);