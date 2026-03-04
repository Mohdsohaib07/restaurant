import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:[3,"firstname must contain at least 3 characters"],
        maxlength:[30,"firstname cannot exceed 30 characters"]
    },
    lastName:{
        type:String,
        required:true,
        minlength:[3,"lastname must contain at least 3 characters"],
        maxlength:[30,"lastname cannot exceed 30 characters"]
    },
    email:{
        type:String,
        required:true,
        validate: [validator.isEmail,"provide a valid Email"]
    },
    phone:{
        type:String,
        required:true,
        minlength:[10,"phone number must contain only 10 digits"],
        maxlength:[10,"phone number must contain only 10 digits"],
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }
});

export const Reservation = mongoose.model("Reservation",reservationSchema);