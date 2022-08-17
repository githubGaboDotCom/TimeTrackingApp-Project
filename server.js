var express = require('express');
var myApp = express();

myApp.use(express.static('public'));

myApp.listen('5000', () => {
    console.log("The server is now actively listening on port 5000.")
});