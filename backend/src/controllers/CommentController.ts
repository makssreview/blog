import {Request, Response} from "express";
import CommentSchema from "../models/CommentModel";
import PostSchema from "../models/PostModel";


export const createComment  = async (req: Request, res: Response) => {
    try{

      const {id, comment} = req.body
        if(!comment){
            res.json({message:'Comment should not be empty'})
        }
        const doc = new CommentSchema({
            comment,
            user: req.user

        })
        const newComment = await doc.save()
        try{
            await PostSchema.findByIdAndUpdate(id, {$push:{comments:newComment._id}})
        }catch (err){
            console.log(err)
        }
        res.json(newComment)
    }catch (err){
        res.json({message:'Error'})
    }
}