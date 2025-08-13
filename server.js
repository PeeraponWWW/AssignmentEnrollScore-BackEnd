import express from 'express';
import dotenv from 'dotenv';
// import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import teacherRouter from './routes/tRoute.js';
import teacherAssistant from './routes/taRoute.js';
import authRouter from './routes/auth.js';

// import cookieParser from "cookie-parser";
dotenv.config();
const PORT = process.env.APP_PORT || 3000;
// const environment = process.env.ENVIRONTMENT || 'development';

const app = express();
app.use(express.static('public'));
// cookie parser
app.use(cookieParser(

));

// cors
app.use(cors(
    {
        origin: ['http://localhost:5173'],
        credentials: true
    }
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/t', teacherRouter);
app.use('/ta', teacherAssistant);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});