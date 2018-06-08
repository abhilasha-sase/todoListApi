var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://34.203.110.84:27017/AnandKSagarJ'); 

mongoose.connect('mongodb://anand:anand_1971@ds247830.mlab.com:47830/anandtestdb'); 

mongoose.connection.once('open',()=>{
 console.log('connected to database')});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('todo list RESTful API server started on: ' + port);


