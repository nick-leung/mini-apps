var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use(express.static('client'));

app.post('/login', (req, res) => {
  var text = req.body.textarea;
  console.log('text: ' + text);
  // take in the text and return a csv table
  res.end('okay');
})

app.listen(3000, () => console.log('Listening on port 3000.'));

// var flattenJsonObject = (json) => {
//   var flattenedObjectArray = [];

//   var headers = [];
//   var keys = Object.keys(json);
//   for (var i = 0; i < keys.length; i++) {
//     if (keys[i] !== "children") {
//       headers.push(keys[i]);
//     }
//   }

//   var traverse = (obj) => {
//     var flattenedObject = {};
//     for (var i = 0; i < headers.length; i++) {
//       flattenedObject[headers[i]] = obj[headers[i]];
//     }
//     flattenedObjectArray.push(flattenedObject);

//     if (obj.children.length === 0) {
//       return;
//     } else {
//       for (var i = 0; i < obj.children.length; i++) {
//         traverse(obj.children[i]);
//       }
//     }
//   }

//   traverse(json);

//   return flattenedObjectArray;
// };

var flattenJsonObject = (json) => {
  var array = [];

  var headers = [];
  var keys = Object.keys(json);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] !== "children") {
      headers.push(keys[i]);
    }
  }

  array.push(headers.join(','));

  var traverse = (obj) => {
    var flattenedArray = [];
    for (var i = 0; i < headers.length; i++) {
      flattenedArray.push(obj[headers[i]]);
    }
    array.push(flattenedArray.join(','));

    if (obj.children.length === 0) {
      return;
    } else {
      for (var i = 0; i < obj.children.length; i++) {
        traverse(obj.children[i]);
      }
    }
  }

  traverse(json);

  return array;
};