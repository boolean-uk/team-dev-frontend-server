import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.js'
import postRouter from './routes/post.js'
import authRouter from './routes/auth.js'
import cohortRouter from './routes/cohort.js'
import noteRouter from './routes/note.js'
import exerciseRouter from './routes/exercise.js'
import courseRouter from './routes/course.js'
import deliveryLogRouter from './routes/deliveryLog.js'
import conversationsRouter from './routes/conversation.js'
import messagesRouter from './routes/message.js'

const app = express()
app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', userRouter)
app.use('/posts', postRouter)
app.use('/cohorts', cohortRouter)
app.use('/logs', deliveryLogRouter)
app.use('/notes', noteRouter)
app.use('/', authRouter)
app.use('/exercises', exerciseRouter)
app.use('/courses', courseRouter)
app.use('/conversations', conversationsRouter)
app.use('/messages', messagesRouter)

app.get('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    data: {
      resource: 'Not found'
    }
  })
})

export default app
