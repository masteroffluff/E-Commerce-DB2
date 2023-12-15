'use strict';

var utils = require('../utils/writer.js');
var Items = require('../service/ItemsService');

module.exports.get_items = function get_items (req, res, next) {
  Items.get_items()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_items_by_type = function get_items_by_type (req, res, next, type) {
  Items.get_items_by_type(type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
