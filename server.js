var express = require('express');
var myApp = express();
var port = 5000;

myApp.use(express.static('public'));

myApp.get('/', (res, req) => {
    console.log("Node.js App is now being hosted on Heroku!");
});

myApp.listen(process.env.PORT || port, () => {
    console.log("The server is now actively listening on port 5000.")
});