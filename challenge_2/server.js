var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static('client'))

app.post('/login', (req, res) => {
  var text = req.body.textArea;
  console.log('text: ' + text);
  res.end('okay');
});

app.listen(3000, () => console.log('Listening on port 3000.'))