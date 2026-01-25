import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.DB_URL || 'mongodb+srv://haroonrasheed1056_db_user:E6yYOa0Jbkz1Aao8@cluster0.i8p7squ.mongodb.net/ecomm_db?appName=Cluster0',
    API_URL: process.env.API_URL,
    VITE_API_URL: process.env.VITE_API_URL,
    CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY || 'pk_test_cmVsYXhlZC1jbGFtLTg0LmNsZXJrLmFjY291bnRzLmRldiQ',
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY || 'sk_test_uwdrHOHgMn7OY3V2K6fUMpd64f6Ixrscngn2OVZPLI',
    INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
}
