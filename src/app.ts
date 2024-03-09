import dotenv from "dotenv"
import express  from "express"
import cors from 'cors'
import dbConnect from "./config/mongo"
import { router } from "./routes" 
dotenv.config()
const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)


dbConnect().then(()=>console.log('Connection Successful: MongoDB '))
app.listen(PORT, () => {

    console.info(`Server listening in Port: ${PORT}`);
    
})