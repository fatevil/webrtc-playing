'use strict';

const config = require('./config');
const express = require('express');
const DB = require('./modules/database');
const app = express();

// serve files
app.use(express.static('public'));

// connect to DB
const dbPromise = new Promise(
    (resolve, reject) => {
        DB.connect('mongodb://' + config.user + ':' + config.pwd + '@localhost/cats', resolve, reject)
    });

dbPromise.then((msg) => {
    console.log(msg);
    app.listen(3000);
}).catch((reason) => {
    console.log(reason);
});
// end connect to DB