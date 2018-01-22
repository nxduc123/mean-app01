
var mongoose =require('mongoose');
var Schema = mongoose.Schema;
var bcryp = require('bcrypt-nodejs');
var UserSchema = new Schema({
    username : {
        type: String,
      //  lowercase: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required:true, 
        lowercase: true,
        unique:true
    }
});


//tạo mã hóa

UserSchema.pre('save', function(next){
    var user = this;
    bcryp.hash(user.password, null , null, function(err,hash){
        if (err) return next(err);
        user.password = hash;
        next();
    });
});



module.exports =mongoose.model('User', UserSchema);

