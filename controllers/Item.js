'use strict';

var utils = require('../utils/writer.js');
var Item = require('../service/ItemService');

module.exports.get_item_by_id = function get_item_by_id (req, res, next, item) {
  Item.get_item_by_id(item)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
