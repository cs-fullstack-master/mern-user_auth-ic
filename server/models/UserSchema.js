var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        user: {type: String, required: true, max: 100},
        password: {type: String, required: true, max: 100},
        age: {type: Number, required: true, min:0},
        imageURL: {type: String},
    }
);


//Export model
module.exports = mongoose.model('userAge', UserSchema);