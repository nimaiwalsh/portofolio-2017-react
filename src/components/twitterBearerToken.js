/*** create-twitter-bearer-token.js ***/
//To obtain your BEARER-TOKEN run 'node create-twitter-bearer-token.js' in the console
var request = require('request');
var consumer_key = 'u9NAGnkkxRKhaHZUYBvfh3mnq';
var consumer_secret = '3hzFIcvt1GRgFLPkvon5pMcPTbZHnNOn11DNqBqJaGdMaHwmcr';
var encode_secret = new Buffer(consumer_key + ':' + consumer_secret).toString('base64');

var options = {
    url: 'https://api.twitter.com/oauth2/token',
    headers: {
        'Authorization': 'Basic ' + encode_secret,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
    body: 'grant_type=client_credentials'
};

request.post(options, function(error, response, body) {
    console.log(body); // <<<< This is your BEARER TOKEN !!!
});