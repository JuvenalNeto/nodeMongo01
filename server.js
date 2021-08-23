var express = require('express');
const { Mongoose } = require('mongoose');
app = express()
port = process.env.PORT || 3000;
mongoose = require('mongoose')
livro = require('./api/Models/livroModel')
bodyParser = require('body-parser')

mongoose.Promise = global.Promise
//https://cloud.mongodb.com
mongoose.connect('link do mongodb')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./api/routes/livroRoutes')
routes(app)

app.listen(port)
