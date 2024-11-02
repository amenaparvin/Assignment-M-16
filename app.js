import express from "express";
import cors from 'cors';
// import mongoose from 'mongoose ';
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cookieParser from 'cookie-parser';
import hpp from 'hpp';
import * as path from "path";
import router from "./routes/api.js";
import {MONGODB_CONNECTION,PORT,MAX_JSON_SIZE,URL_ENCODED,WEB_CACHE,REQUEST_LIMIT_NUMBER,REQUEST_LIMIT_TIME} from "./app/config/config.js";
import e from "express";


const app = express();

// Global Application Middleware
app.use(cors());
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(hpp())
app.use(helmet())
app.use(cookieParser())

// Rate Limiter

const limiter=rateLimit({windowMs:REQUEST_LIMIT_TIME,max:REQUEST_LIMIT_NUMBER})
app.use(limiter)

// web Caching
app.set('etag',WEB_CACHE)


// mongodb connection


// Set API Routes
app.use("/api",router)

//set Application Storage
app.use(express.static('storage'))

//run your Express Back End project

app.listen(PORT,() => {
    console.log(`App running on port ${PORT}`);
})