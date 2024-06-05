
import express from 'express'

import 'dotenv/config'
import mongoConfig from './config.js'
import userRoutes from './routes/userRoutes.js'
import exercisesRoutes from './routes/exercisesRoutes.js'
import cors from 'cors'

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());
app.use('/api/users', userRoutes)
app.use('/api/exercises', exercisesRoutes)

app.get('/', (Req, res)=> {
    res.json("This is Home page in server")
})

//add app.listen
app.listen(PORT, ()=> {
    console.log(`Listening on PORT: http://localhost:${PORT}`)
    mongoConfig()
})