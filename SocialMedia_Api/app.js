
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './DB/connection.js';
const app = express()
const port = 3000
dotenv.config()

import cors from 'cors'
app.use(cors())

app.use(express.json())

import * as indexRouter from './modules/index.route.js';
const userUrl = process.env.BASEURL;
connectDB();
app.use(`${userUrl}/post`, indexRouter.PostRouter)
app.use(`${userUrl}/auth`, indexRouter.authRouter)
app.use(`${userUrl}/user`, indexRouter.userRouter)
app.use(`${userUrl}/comment`, indexRouter.commentRouter)
app.get('*', (req, res) => res.send('Not Found !'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))