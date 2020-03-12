const express = require('express');
const router = express.Router();
const Orders = require("../models/orders");

router.get('/', (req, res, next) => {
    Orders.find()
        // .select('name price')  //method to select fields
        .exec()
        .then(docs => {
            // console.log(docs);
            const response = {
                count: docs.length,
                products: docs.map( (doc) => {
                    return {
                        name: doc.name,
                        price: doc.price,
                        _id: doc._id,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/products/" + doc._id
                        }
                    }
                })
            };
            res.status(200).json(response)
        })
        .catch( err => {
            res.status(400).json({
                error: err
            })
        })
});


router.post('/', (req, res) => {
    const orders = new Orders({
        quantity: req.body.quantity,
        product: req.body.product
    })

    orders.save()
        .then(data => {
        console.log(data);
        res.status(200).json({
            message: 'Order created'
        })
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({
            message: err
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
