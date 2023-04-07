import { PostModel } from '../../../DB/models/post.models.js' 
import clouddinary from "../../../services/cloudinary.js";

export const createpost = async (req, res) => {
    try {
        
            const { desc } = req.body;
            const existingPost = await PostModel.findOne({ desc });
            if (existingPost) {
                return res.status(400).json({ message: "Post with the same desc already exists" });
            }
            if (req.files){
                const images = [];
                for (const file of req.files) {

                const timestamp = Date.now();
                const publicId = `posts/${req.user.userName}_${req.user._id}/post/${timestamp}`;
                const { secure_url } = await clouddinary.uploader.upload(file.path, {
                    public_id: publicId
                });
                images.push(secure_url)
            }
           
            const post = await PostModel.create({  desc ,img:images ,userId: req.user._id})
            return res.status(200).json({ message: "success", post })
        }else{
            const post = await PostModel.create({  desc , userId: req.user._id})
            return res.status(200).json({ message: "success", post })

        }

    
    } catch (error) {
        return res.status(401).json({ message: "catch create post error", error })

    }
}


export const updatePost = async (req, res) => {
    const { id } = req.params;
    const {  desc   } = req.body;
    const Post = await PostModel.findOneAndUpdate({ _id: id }, {   desc  }, { new: true })
    return res.json({ message: "success", Post })
}
export const getPost = async (req, res) => {
   try {
       const { id } = req.params;
       const Post = await PostModel.findById({ _id: id })
       return res.json(Post )
    
   } catch (error) {
    return res.json(error )
    
   }
} 
/* const getAllPosts = async (req, res) => {
    const Qnew = req.query.new;
    const Qcategory = req.query.category;
    try {
        let Posts;
        if (Qnew) {
            Posts = await PostModel.find().sort({ createdAt: -1 }).limit(5)
        } else if (Qcategory) {
            Posts = await PostModel.find({categories: { $in: [Qcategory], }})
        } else {
            Posts = await PostModel.find();
        }

        res.json({ message: "success", Posts })

    } catch (error) {

        res.json({ message: "catch", error })
    }

 
} */

export const getAllPosts = async (req, res) => {
    try {
 
const myposts = await PostModel.find({}).sort({ createdAt: -1 }).populate(
   [ {
        path:"userId",
        select:"userName profilePic name"
    } ]
)


/* .populate(
               [ {
                    path: 'userId',
                    select: 'userName profilePic name'  
                },{
                    path: 'commentId',
                    select: 'text  '  
                }])  */
      if(myposts){

          return res.status(200).json({message:"success",myposts});
      }else{
        return res.status(404).json({message:"not found"});

      }
    } catch (error) {
      return res.status(401).json({ message: "catch", error });
    }
  };
  
export const deletePost = async (req, res) => {
    const { id } = req.params;
    const Post = await PostModel.findOneAndDelete({ _id: id })
    res.json({ message: "success", Post })
}

 