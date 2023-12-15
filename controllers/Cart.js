'use strict';

var utils = require('../utils/writer.js');
var Cart = require('../service/CartService');

module.exports.add_to_cart = function add_to_cart (req, res, next, item, volume) {
  Cart.add_to_cart(item, volume)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clear_cart = function clear_cart (req, res, next) {
  Cart.clear_cart()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.delete_cart_item = function delete_cart_item (req, res, next, item) {
  Cart.delete_cart_item(item)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_cart = function get_cart (req, res, next) {
  Cart.get_cart()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update_cart_item = function update_cart_item (req, res, next, item, volume) {
  Cart.update_cart_item(item, volume)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
