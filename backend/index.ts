import {body} from 'express-validator';
import express  from "express"
import * as mongoose from "mongoose";
import cors from 'cors'
import {checkAuth, checkAuthorisation, login, register} from "./src/helpers/functions";


const app = express()
app.use(express.json() )
app.use(cors())
const port = 3222
mongoose
    .connect('mongodb+srv://admin:admin123@cluster0.ttgwg1i.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB ERROR', err));



app.post(
    '/auth/register',
    body('email').isEmail(),
    body('password', "mi222n 5").isLength({min: 6}),
    body('fullName').isLength({min: 3}),
    register
);

app.post('/auth/login', login)

app.get('/auth/me',checkAuth,checkAuthorisation)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})