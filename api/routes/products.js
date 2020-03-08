const express = require('express');
const router = express.Router();
const Products = require("../models/products");
const mongoose = require('mongoose');


router.get('/', (req, res, next) => {
    Products.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs)
        })
        .catch( err => {
            res.status(400).json({
                error: err
            })
        })
});


router.post('/', (req, res) => {

    // console.log(req.body);

    const products = new Products({
        // _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });

    // products.save((err, obj) => {
    // if (err) {
    //     console.error(err);
    //     return res.status(400).json({
    //              message: 'failure'
    //      })
    // }
    //     console.log(obj);
    //      res.status(200).json({
    //              message: 'success'
    //      })
    // })
    products.save().then(data => {
        console.log(data);
        res.status(200).json({
            message: 'obtained'
        })
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({
            message: 'error'
        })
    });
});
// router.post('/', (req, res, next) => {
//     const product = {
//         name: req.body.name,
//         price: req.body.price
//     };
//     res.status(200).json({
//         message: 'Post request for products',
//         createdProduct: product
//     });
// });

// router.post('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'Post request for products'
//     })
// });

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;

    // if (id === 'special'){
    //     res.status(200).json({
    //         message: 'Discovered again',
    //         id: id
    //     })
    // }else{
    //     res.status(200).json({
    //         message: 'passed an ID'
    //     });
    // }

    Products.findById(id)
        .exec()
        .then(doc => {
            console.log("from database", doc);
            res.status(200).json({
                message: "received",
                cratedProducts: doc
            });
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({
                Message: "Not found",
                error: err
            })
        })
});

module.exports = router;
