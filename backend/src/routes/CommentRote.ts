import {Router} from "express"
import {checkAuth} from "../controllers/authentication";
import {createComment} from "../controllers/CommentController";


const commentRouter = Router()

commentRouter.post('/comments/:id', checkAuth, createComment)
export {commentRouter}