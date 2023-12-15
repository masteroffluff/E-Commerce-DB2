'use strict';


/**
 * a an item to the cart
 *
 * item Integer The item identifier
 * volume Integer The volume identifier
 * returns Cart
 **/
exports.add_to_cart = function(item,volume) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cart_id" : 6,
  "item_list" : [ {
    "price" : 19.99,
    "name" : "ACME Rocket",
    "id" : 1
  }, {
    "price" : 19.99,
    "name" : "ACME Rocket",
    "id" : 1
  } ],
  "customer_id" : 0
}, {
  "cart_id" : 6,
  "item_list" : [ {
    "price" : 19.99,
    "name" : "ACME Rocket",
    "id" : 1
  }, {
    "price" : 19.99,
    "name" : "ACME Rocket",
    "id" : 1
  } ],
  "customer_id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * clear the entire cart
 *
 * no response value expected for this operation
 **/
exports.clear_cart = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * remove a cart item
 *
 * item Integer The ID of the item to be removed from the cart
 * returns Cart
 **/
exports.delete_cart_item = function(item) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cart_id" : 6,
  "item_list" : [ {
    "price" : 19.99,
    "name" : "ACME Rocket",
    "id" : 1
  }, {
    "price" : 19.99,
    "name" : "ACME Rocket",
    "id" : 1
  } ],
  "customer_id" : 0
}, {
  "cart_id" : 6,
  "item_list" : [ {
    "price" : 19.99,
    "name" : "ACME Rocket",
    "id" : 1
  }, {
    "price" : 19.99,
    "name" : "ACME Rocket",
    "id" : 1
  } ],
  "customer_id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all items in the cart
 *
 * no response value expected for this operation
 **/
exports.get_cart = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * update the cart item volume
 *
 * item Integer The item identifier
 * volume Integer The volume identifier
 * returns Cart
 **/
exports.update_cart_item = function(item,volume) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cart_id" : 6,
  "item_list" : [ {
    "price" : 19.99,
    "name" : "ACME Rocket",
    "id" : 1
  }, {
    "price" : 19.99,
    "name" : "ACME Rocket",
    "id" : 1
  } ],
  "customer_id" : 0
}, {
  "cart_id" : 6,
  "item_list" : [ {
    "price" : 19.99,
    "name" : "ACME Rocket",
    "id" : 1
  }, {
    "price" : 19.99,
    "name" : "ACME Rocket",
    "id" : 1
  } ],
  "customer_id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

