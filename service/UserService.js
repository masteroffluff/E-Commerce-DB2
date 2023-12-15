'use strict';


/**
 * login form
 * render the login form
 *
 * no response value expected for this operation
 **/
exports.get_login = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * log out
 * log user out and redirect them to the log in route.
 *
 * no response value expected for this operation
 **/
exports.get_logout = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * render registration form 
 * Passes the instruction to render the registration form
 *
 * no response value expected for this operation
 **/
exports.get_register = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get the user details
 *
 * returns Customer_out
 **/
exports.get_user = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "country",
  "city" : "city",
  "postcode" : "postcode",
  "last_name" : "last_name",
  "street1" : "street1",
  "street2" : "street2",
  "first_name" : "first_name",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * logs a user into the database
 * Logs the user into the database based on email address and password returns the id of the customer.
 *
 * body Login 
 * no response value expected for this operation
 **/
exports.post_login = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * adds new user
 * adds new user basis email, passowrd and address. 
 *
 * body Customer 
 * returns Customer_out
 **/
exports.post_register = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "country",
  "city" : "city",
  "postcode" : "postcode",
  "last_name" : "last_name",
  "street1" : "street1",
  "street2" : "street2",
  "first_name" : "first_name",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update the user
 * update the user's details
 *
 * body Customer 
 * returns Customer_out
 **/
exports.update_user = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "country",
  "city" : "city",
  "postcode" : "postcode",
  "last_name" : "last_name",
  "street1" : "street1",
  "street2" : "street2",
  "first_name" : "first_name",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

