import dotenv from 'dotenv';

dotenv.config();

const ENV = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.DB_URL,
    API_URL: process.env.API_URL,
};