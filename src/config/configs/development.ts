export const config = {
  application: {
    PORT: Number(process.env.PORT),
    BCRYPT_SALT: Number(process.env.BCRYPT_SALT),
    HOST: process.env.HOST,
    ENV: 'development',
    isProd: false,
    CLIENT_URL: process.env.CLIENT_URL,
  },
  database: {
    DB_CONNECTOR: process.env.DB_CONNECTOR,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_PORT: Number(process.env.DB_PORT),
    DATABASE_URL: process.env.DATABASE_URL,
  },
  secrets: {
    JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY,
    JWT_REFRESH_PRIVATE_KEY: process.env.JWT_REFRESH_PRIVATE_KEY,
    JWT_CLIENT_PRIVATE_KEY: process.env.JWT_CLIENT_PRIVATE_KEY,
    JWT_PUBLIC_KEY: process.env.JWT_PUBLIC_KEY,
    JWT_ALGORITHM: process.env.JWT_ALGORITHM,
    JWT_EXPIRE_TIME: Number(process.env.JWT_EXPIRE_TIME),
    JWT_EXPIRE_REFRESH_TIME: Number(process.env.JWT_EXPIRE_REFRESH_TIME),
    SESSION_SECRET: process.env.SESSION_SECRET,
  },
  social: {
    TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
    TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
  },
  emailConfirmationExpireTime: Number(
    process.env.EMAIL_CONFIRMATION_EXPIRE_TIME,
  ),
};