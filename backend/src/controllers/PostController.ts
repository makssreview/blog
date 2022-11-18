import {Request, Response} from "express";
import PostSchema from "../models/PostModel";
import CommentSchema from "../models/CommentModel";


export const createPost = async (req: Request, res: Response) => {
    try {
        const doc = new PostSchema({
            title: req.body.title,
            tags: req.body.tags,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            user: req.user,
        })
        const post = await doc.save()
        res.json(post)
    } catch (err) {
        res.status(500).json({
            message: `Post didn't created`
        })
    }
}

export const getAllPosts = async (req: Request, res: Response) => {
    try {
        const posts = await PostSchema.find().populate('user').exec()
        res.json(posts)
    } catch (err) {
        res.status(500).json({
            message: `Couldn't find posts`
        })
    }
}
export const getOnePost = async (req: Request, res: Response) => {
    try {
        const postId = req.params.id
        const onePost = await PostSchema.findById({_id: postId})

        if (!onePost) {
            return res.status(404).json({
                message: 'Post not found'
            })
        }
        res.json(onePost)
    } catch (err) {
        res.status(500).json({
            message: `Couldn't find post`
        })
    }
}

export const deletePost = async (req: Request, res: Response) => {
    try {
        const postId = req.params.id

        const onePost = await PostSchema.findOneAndDelete({_id: postId})
        if (!onePost) {
            return res.status(404).json({
                message: 'Post not found'
            })
        }
        res.json({
            success: true
        })
    } catch (err) {
        res.status(500).json({
            message: `Couldn't find post`
        })
    }
}

export const updatePost = async (req: Request, res: Response) => {
    try {
        const postId = req.params.id

        const updatedPosts =  await PostSchema.updateOne(
            {_id: postId},
            {
                title: req.body.title,
                tags: req.body.tags,
                text: req.body.text,
                imageUrl: req.body.imageUrl,
                user: req.user,
            },
        )
        if (!updatedPosts) {
            return res.status(404).json({
                message: 'Post not found'
            })
        }
        res.json({
            success:true
        })
    } catch (err) {
        res.status(500).json({
            message: `Couldn't update post`
        })
    }
}
export const  getPostComments = async (req: Request, res: Response) => {
    try{
        const postId = req.params.id
        const post  = await PostSchema.findById({_id: postId})
        const list = await Promise.all(
            post?.comments.map((comment:object)=>{
                return CommentSchema.findById(comment)
            })
        )
        res.json(list)
    } catch (err){}
}