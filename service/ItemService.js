'use strict';


/**
 * get a singular item by id
 *
 * item Integer The requested item
 * returns Item
 **/
exports.get_item_by_id = function(item) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "item_id" : 0,
  "price" : "price",
  "name" : "name",
  "description" : "description",
  "category" : "category"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

