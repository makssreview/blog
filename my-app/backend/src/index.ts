import cors from 'cors'
import express,{Request,Response} from 'express'
import * as mongoose from "mongoose";
import {body, validationResult} from 'express-validator'


mongoose
    .connect('mongodb+srv://admin:admin123@cluster0.ttgwg1i.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB ERROR', err));
//dddd
const app = express()
const port = 8888
app.use(cors())
app.use(express.json())

//Postman Error: read ECONNRESET
app.post('/register',
        body('email').isEmail(),
        body('password').isLength({min:5}),
        body('fullName').isLength({min:3}),
        body('avatarUrl').optional().isURL,
    (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        else return res.json({
            success: true
        })


    })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})

