(function(){

  'use strict';

  var _ = require('lodash');

  function square(list) {
    return _.map(list, function(n){ return n*n; });
  }

  module.exports = square;

}());