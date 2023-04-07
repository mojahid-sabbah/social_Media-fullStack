import {model ,Schema} from'mongoose';

const userSchema  = new  Schema({
     userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: Number,
    gender: { type: String, enum: ['male', 'female'], default: 'male' },
    name: { type: String, default: null  },
    confirmEmail: { type: Boolean, default: false },
    profilePic: String,
    coverPic: String,
    city: { type: String, default: null },
    website : { type: String, default: null },
    sendCode: { type: String, default: null },
   

}, { timestamps: true })
 
export const userModel = model('user', userSchema)
