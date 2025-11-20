import express from 'express';
import noteroutes from './routes/notesroutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import RateLimiterimport from './middleware/rateLimiter.js';
import cors from 'cors';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
    origin: 'http://localhost:5173', // Adjust the origin as per your frontend's address
}));
//middlewares
app.use(express.json()); // this middleware is used to parse JSON request bodies
app.use(RateLimiterimport);
app.use("/api/notes",noteroutes);


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    }
)

})