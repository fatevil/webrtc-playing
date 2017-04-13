'use strict';
const express = require('express');
const fs = require('fs');
const https = require('https');
const http = require('http');

const app = express();
app.use(express.static('public'));

const sslkey = fs.readFileSync('ssl-key.pem');
const sslcert = fs.readFileSync('ssl-cert.pem')

const options = {
    key: sslkey,
    cert: sslcert,
};

https.createServer(options, app).listen(3000);
console.log(`HTTPS Listening on port 3000 `);