const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('../src/config');
const PORT = 4000;
const routing = require('./routes');
const mongo = require('./database/mongo');
const model = require('../src/ImageModel');

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());
mongoose.set('useCreateIndex', true);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  mongoose.connect(mongo.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', function(){
    console.log("Connected to Database");
})


app.post('/', (req, res) =>{
    res.send("Welcome to the Database");
})


app.use('/api', routing);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});