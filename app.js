const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');

// app.use((req, res, next) => {
//     res.status(200).json({
//         Message: 'Works',
//         Message2: 'work as well',
//         Casts: 'Actor 1'
//     });
//
// });


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) =>{
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers',
                   'Origin, X-Requested-With, Content-Type, Accept, Authorization'
            );
        if (req.method === 'OPTIONS'){
            res.header('Access-Control-Allow-Method','PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({
            });
        }
        next();
});


app.use('/products', productRoutes);

// app.use((req, res, next) => {
//     const error = new Error('Not Found');
//     error.status = 404;
//     next(error);
// });
//
// app.use((error, req, res, next) => {
//     res.status(err.status || 500);
//     res.json({
//         error: {
//             message : error.message
//         }
//     })
// });

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
//
// // Connection URL
// const url = 'mongodb+srv://gateavalon:lceco1985@clustergl-6x39r.mongodb.net/test?retryWrites=true&w=majority';
//
// // Database Name
// const dbName = 'Demo';
//
// // Create a new MongoClient
// const client = new MongoClient(url);
//
// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
//
//   client.close();
// });


const url = "mongodb+srv://gateavalon:eFFUZ3R7ZKOCmJdJ@clustergl-6x39r.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url, {
    useNewUrlParser: true
});

module.exports = app;
