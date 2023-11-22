const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const saltRounds=10;

const UserSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

UserSchema.pre('save',function(next){
    if(this.isNew || this.isModified('password')){

        const document=this;

        bcrypt.hash(document.password, saltRounds, (err,hashedPassword)=>{
            if(err){
                next(err);
            }else{
                document.password = hashedPassword;
                next();
            }
        });
    }else{
        next()
    }
});

UserSchema.methods.isCorrectPassword = function (password, callback) {
    bcrypt.compare(password, this.password, function (err, result) {
        if (err) {
            return callback(err);
        }
        return callback(null, result);
    });
};

module.exports = mongoose.model('usuarios',UserSchema)