var express = require('express');
const { Mongoose } = require('mongoose');
app = express()
port = process.env.PORT || 3000;
mongoose = require('mongoose')
livro = require('./api/Models/livroModel')
bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://Juvenal:Net01001@testenode.lpm1e.mongodb.net/testenode?retryWrites=true&w=majority')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./api/routes/livroRoutes')
routes(app)

app.listen(port)