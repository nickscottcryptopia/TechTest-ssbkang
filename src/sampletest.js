var express = require('express')
var app = express()
var fs = require('fs')

var displayData = 'Tech Test sample node.js Express application'

fs.readFile('extracontent.txt', 'utf8', function(err, data) {
    if (err){
        return console.warn("Error reading extra content")
    }
    displayData = displayData + "\r\n" + data;
});

app.get('/', (req, res) => res.send(displayData))

app.listen(3000, () => console.log('Example app listening on port 3000!'))