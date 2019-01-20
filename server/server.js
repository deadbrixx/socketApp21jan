var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var publicFolder = path.join(__dirname, '../public');
app.use(express.static(publicFolder));

app.listen(port, (err) => {
    if(err) throw err;
    else{
        console.log(`Server listening on ${port}`);
    }
})
