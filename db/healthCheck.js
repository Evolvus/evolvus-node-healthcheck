const debug = require("debug")("evolvus-nodehealthCheck:db:nodehealthCheck");
const mongoose = require("mongoose");
const ObjectId = require('mongodb')
  .ObjectID;
const _ = require("lodash");

const schema = require("./healthCheckSchema");

var collection = mongoose.model("healthCheck", schema);




module.exports.save = (object) => {
  // let result = _.merge(object
  // };
  let saveObject = new collection(object);
  return saveObject.save();
};


module.exports.findAll = (limit) => {
  if (limit < 1) {
    return collection.find({});
  }
  return collection.find({}).limit(limit);
};

// Deletes all the entries of the collection.
// To be used by test only
// module.exports.deleteAll = (tenantId) => {
//   let query = {
//     "tenantId": tenantId
//   };
//   return collection.remove(query);
// };