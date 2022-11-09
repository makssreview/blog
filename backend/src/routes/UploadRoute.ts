import multer from "multer";
import {Request, Response} from "express";
import {Router} from "express"
const uploadRouter = Router()

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'upload')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});
const upload =multer({storage})

uploadRouter.post('/upload' ,upload.single('imageUrl'),(req:Request,res:Response)=>{
    res.json({
        url:`/upload/${req.file?.originalname}`
    })
})

export {uploadRouter}