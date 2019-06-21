import dotenv from 'dotenv';
dotenv.config();

const { env } = process;

const config = {
  bodyLimit: '100kb',
  port: env.PORT || 8080,
};

export default config;
