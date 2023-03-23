var express = require('express');
var fs = require('fs');
var url = require('url'); 
var app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get(/./, (req, res) => {
    console.log(req.path);
    if(fs.existsSync(__dirname + req.path) == true)
    {
        res.sendFile(__dirname + req.path);
    }
    else {
        res.statusCode = 404;
    }
    
})
var server = app.listen(3000, () =>
{
    var host = server.address().address;
    var port = server.address().port;
    console.log("ok")
});