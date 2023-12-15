'use strict';


/**
 * gets a list of all products 
 *
 * returns ItemList
 **/
exports.get_items = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "item_id" : 0,
  "price" : "price",
  "name" : "name",
  "description" : "description",
  "category" : "category"
}, {
  "item_id" : 0,
  "price" : "price",
  "name" : "name",
  "description" : "description",
  "category" : "category"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get a list of item types
 *
 * type String The requested item
 * returns ItemList
 **/
exports.get_items_by_type = function(type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "item_id" : 0,
  "price" : "price",
  "name" : "name",
  "description" : "description",
  "category" : "category"
}, {
  "item_id" : 0,
  "price" : "price",
  "name" : "name",
  "description" : "description",
  "category" : "category"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

