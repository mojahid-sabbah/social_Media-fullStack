import {model ,Schema} from'mongoose';

const relationSchema  = new  Schema({
      userId:{ ref:'user', required:true  },
    follower_Id:{ type:Number, required:true  },
    followed_Id:{ type:Number, required:true  }
}, {timestamps:true})
 
export const relationModel = model('relation' , relationSchema)
