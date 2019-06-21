import dotenv from 'dotenv';
dotenv.config();

const { env } = process;

const config = {
  bodyLimit: '100kb',
  port: env.PORT || 6009,
};

export default config;
