import {model ,Schema} from'mongoose';

const likesSchema  = new  Schema({
      userId:{ ref:'user', required:true  },
    postId:{ ref:'post', required:true  }
}, {timestamps:true})
 
export const likesModel = model('likes' , likesSchema)
