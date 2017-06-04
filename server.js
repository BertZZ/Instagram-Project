var express = require('express')
var app = express()

app.get('/', function(req,res) {
  res.sendfile('index.html')
})

app.get('/goodbye', function(req,res) {
  res.send('Goodbye World')
})


var server = app.listen(8081, function () {
  var host = server.address().adresss
  var port = server.address().port

  console.log("App running, Listening at http://", host,port)
})
