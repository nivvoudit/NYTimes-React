const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const reactRouter = require('react-router');
const path = require('path');
const session = require('express-session');

const app = express();
const PORT = (process.env.PORT || 8080);

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

mongoose.promise = Promise;
mongoose.connect('mongodb://localhost/nytreact')
var db = mongoose.connection;

db.on('error', function(err) {
    console.log('Mongoose Error: ' + err);
});

db.once('open', function() {
    console.log('Successful connection to MongoDB');
});

app.set('trust proxy', 1);
app.use(session({
    secret: 'cat',
    resave: false,
    saveUninitialized: false
}));

require('./routes/html-routes')(app);
require('./routes/api-routes')(app);

app.listen(PORT, function() {
    console.log('Listening to ' + PORT);
});