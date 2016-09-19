// Require the module
var EasyFit = require('./node_modules/easy-fit/dist/easy-fit.js').default;

// Read a .FIT file
var fs = require('fs');
fs.readFile('1361680148.fit', function (err, content) {

  // Create a EasyFit instance (options argument is optional)
  var easyFit = new EasyFit({
    force: true,
    speedUnit: 'km/h',
    lengthUnit: 'km',
    temperatureUnit: 'kelvin',
    elapsedRecordField: true,
    mode: 'cascade',
  });

  // Parse your file
  easyFit.parse(content, function (error, data) {

    // Handle result of parse method
    if (error) {
      console.log(error);
    } else {
      console.log(JSON.stringify(data));
    }

  });

});
