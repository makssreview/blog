import {body} from 'express-validator';
import express, {Request, Response} from "express"
import * as mongoose from "mongoose";
import cors from 'cors'
import {
    checkAuth,
    checkAuthorisation,
    createPost, deletePost,
    getAllPosts,
    getOnePost,
    login,
    register, updatePost
} from "./src/helpers/functions";
import multer from "multer";
import * as path from "path";
import {v1} from "uuid";

const app = express()
app.use(express.json())
app.use('/upload', express.static('upload')) //catch GET request to static files
app.use(cors())
const port = 3222
mongoose
    .connect('mongodb+srv://admin:admin123@cluster0.ttgwg1i.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB ERROR', err));

// const photoStorage = multer.diskStorage({
//     destination:(_,_,cb)=>{
//         cb(null,'uploads')
//     }
// })
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve('./upload/'))
    },
    filename: (req, file, callback) => {
        callback(null, `${v1()}-${file.originalname}`);
    }
});
const upload =multer({storage})

//registration
app.post(
    '/auth/register',
    body('email').isEmail(),
    body('password', "mi222n 5").isLength({min: 6}),
    body('fullName').isLength({min: 3}),
    register
);
app.post('/auth/login',
    body('email').isEmail(),
    body('password', "mi222n 5").isLength({min: 6}),
    login)
app.get('/auth/me',checkAuth,checkAuthorisation)
//upload photo
app.post('/upload' ,upload.single('image'),(req:Request,res:Response)=>{
    res.json({
        url:`/upload/${req.file?.originalname}`
    })
})
//post
app.post('/posts',
    body('title', "Add Title").isLength({min: 6}).isString(),
    body('text', "Add Text").isLength({min: 6}).isString(),
    checkAuth,
    createPost)
app.delete('/posts/:id', checkAuth,deletePost)
app.patch('/posts/:id', checkAuth,updatePost)
app.get('/posts',getAllPosts)
app.get('/posts/:id', getOnePost)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})