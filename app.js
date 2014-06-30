(function() {

  'use strict';
  
  var _ = require('lodash');
  var sayHi = require('./square');
  
  console.log("Hello app!");
  
  var input = [1,2,3,4];
  
  console.log('Input is: ', input);
  console.log('Squared is: ', square(input));

}());