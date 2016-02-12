#!/usr/bin/env node

/**
 * Created by rettig on 2/12/16.
 */

// http://stackoverflow.com/questions/34715106/how-to-added-sourcemap-in-react-native-for-production/

var sourceMap = require('source-map');
var fs = require('fs');

fs.readFile('release/main.map', 'utf8', function (err, data) {
  var smc = new sourceMap.SourceMapConsumer(data);

  console.log(smc.originalPositionFor({
    line: 2,
    column: 18591
  }));
});
