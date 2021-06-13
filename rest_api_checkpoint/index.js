const express = require('express');
const mongoose  = require('mongoose');
// const Person = require('./models/Person');
const app = express();
// .env
require('dotenv').config();

//url replaced with .env variable
mongoose.connect(process.env.MONGOD_URL,{useNewUrlParser : true, useUnifiedTopology : true});
mongoose.Promise = global.Promise;

const db = mongoose.connection;


db.once('open', _ => {
    console.log('Database connected', process.env.MONGOD_URL);
});

db.on('error', err => {
    console.error('connection error:', process.env.MONGOD_URL);
});

//app.use(express.static('public'));// express a la possibilité dutiliser les fichiers static. Il a un dossier qui  a comme nom 'public' et contient les les fichier a utiliser.

app.use(express.json());
app.use('/api', require('./api'));
app.use(function(err, req, res, next) {
    res.status(422).send({error: err.message})
});

app.listen(5000, function() {//process.env.port || process.env.port2
    console.log('now listening for requests.');
});