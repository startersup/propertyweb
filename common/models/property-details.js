'use strict';

module.exports = function(Propertydetails) {
    Propertydetails.beforeCreate = function (next, model) {
        model.createdAt = Date.now();
        next();
      };
    
      Propertydetails.beforeUpdate = function (next, model) {
        model.updatedAt = Date.now();
        next();
      };
};
