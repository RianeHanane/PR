const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema({
    clientId: {
      type: String
   },
   login: {
      type: String
   },
   password: {
      type: String
   },
   clientSecret: {
      type: Number
   }
}, {
   collection: 'users'
})

module.exports = mongoose.model('User', User)