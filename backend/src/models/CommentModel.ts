import mongoose from "mongoose";
interface CommentEvent {
    user: mongoose.Schema.Types.ObjectId
    comment:string
    _id:string
}

const CommentSchema = new mongoose.Schema<CommentEvent>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
          },
    comment:{
        type:String,
        required:true
    }
    }, {
        timestamps: true,
    }
)

export default mongoose.model('Comment', CommentSchema)