import { model, Schema, Types } from 'mongoose';

const PostSchema = new Schema({
    desc: { type: String, required: true },
    img: [String],
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    commentId: [{ type: Schema.Types.ObjectId, ref: 'comment' }],
    likes: [{ type: Schema.Types.ObjectId, ref: 'user' }],


}, { timestamps: true })

export const PostModel = model('post', PostSchema)
