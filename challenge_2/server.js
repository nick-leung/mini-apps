var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html')) //
})

app.post('/login', (req, res) => {
  console.log('req = ' + req);
  var text = req.body.textArea;
  console.log('text = ' + text);
  res.end('okay');
});

app.listen(3000, () => console.log('Listening on port 3000.'))