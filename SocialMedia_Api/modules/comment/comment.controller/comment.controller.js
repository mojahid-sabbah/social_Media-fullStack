import { commentModel } from "../../../DB/models/comment.model.js";
import { PostModel } from "../../../DB/models/post.models.js";

export const createcomment = async (req, res) => {
    try {

        const { text } = req.body;
        const { id } = req.params; // post id
        const post = await PostModel.findById(id);
        if (!post) {
            return res.status(400).json({ message: "Post not exists" });
        } else {
            const comment = await commentModel.create({ text, userId: req.user._id, postId: id }) // if we need to add the id of post(postId:id)>> {postId we added it in commentModel}
            const post = await PostModel.findByIdAndUpdate(id, { $push: { commentId: comment._id } })
            return res.status(201).json({ message: "success" });

        }
    } catch (error) {
        return res.status(400).json({ message: "catch createcomment", error });

    }
}


export const getAllcommentss = async (req, res) => {
    try {
        const { id } = req.params;
        const mypost = await PostModel.findById(id)
        
        if (mypost) {
            const comments = await commentModel.find( {postId: id} ).populate(
                {
                    path: "userId",
                    select: "userName profilePic"
                }
                )
                return res.status(200).json({ message: "success", comments });
            if (comments) {

                return res.status(200).json({ message: "success", comments });
            } else {
                return res.status(200).json({ message: "there is no comments pls add a comment" });

            }
        } else {
            return res.status(404).json({ message: "not found" });

        }
    } catch (error) {
        return res.status(401).json({ message: "catch", error });
    }
};