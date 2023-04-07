import {model ,Schema} from'mongoose';

const storiesSchema  = new  Schema({
     text:{type:String,required:true, },
    userId:{ ref:'user', required:true  },
    image:{ type:String, required:true  }
}, {timestamps:true})
 
export const storiesModel = model('stories' , storiesSchema)
