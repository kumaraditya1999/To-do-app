var express = require('express');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');


//declare the app
var app = express();

//connect to the data base
// let dev_db_url = 'mongodb://aditya:aditya123@ds225624.mlab.com:25624/todoapp';
// let mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set up the template engines
app.set('view engine','ejs');
app.use(express.static('./ToDoApp'));

//use the routes
var routes = require('./routes/routes');
app.use('/',routes);


app.get('/',function(req,res){
	console.log("uojls");
});


app.listen('3000',()=>{
	console.log("You are listening to port 3000");
});