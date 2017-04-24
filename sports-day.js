var express = require('express')
var app = express()
// calling on the ejs folder to be what im using
app.set('view engine', 'ejs');
// create get action for `/` path to render whats on our ejs file.
app.get('/', function(req, res){
    res.render('sports-day')
})

// telling our app to render at host 3000.
app.listen(3000, function () {
  console.log('pick your team app listening on port 3000')
})
