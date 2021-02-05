const mongoose = require('mongoose');

const schema = mongoose.Schema({

    name:{
        fname:{
            type:String
        },
        lname:{
            type:String
        }
    },

    Study:{
        Branch:{
            type:String,
        },
        Sem:{
            type:Number
        }
    },

    City:{
        type:String,
        required:true,
        minlength:3
    },

    Contact:{
        Email:{
            type:String,
        },
        Phnno:{
            type:Number,
        }
    }

},{timestamps:true});

module.exports = mongoose.model("Student",schema);