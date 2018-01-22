var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var morgan = require('morgan');
var mongoose = require('mongoose');
var User = require('./app/models/user')

app.use(morgan('dev'));

mongoose.connect('mongodb://localhost/meanstack', function(err){
    if (err) {
        console.log('Not connected to the database' + err);

    } else {
        console.log('successfully conneced to MongoDB');
    }
});

app.post('/users', function(req, res){
    var user = new User();
    user.username = res.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.save();
});

 app.listen(port, function(){
     console.log('Run the server on port' + port);
 });