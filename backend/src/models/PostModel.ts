import mongoose from "mongoose";
interface IEvent {
    _id: any
    title: string
    tags:any
    text: string
    imageUrl: string
    user: mongoose.Schema.Types.ObjectId
    comments:any
}
interface CommentEvent {
    user?: mongoose.Schema.Types.ObjectId
    comment?:string
    _id?:string
}

const PostSchema = new mongoose.Schema<IEvent>({
        title: {
            type: String,
            required: true
        },
        tags: {type: Array, required: true},
        text: {
            type: String,
            required: true,
        },
        imageUrl: {type: String, required: true},
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    }, {
        timestamps: true,
    }
)

export default mongoose.model('Post', PostSchema)