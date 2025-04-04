import dotenv from 'dotenv';
import Config from '../interfaces/config.interface';
import NODE_ENV from '../../environments/environment';

dotenv.config();

const config: Config = {
  port: NODE_ENV.PORT || 3000,
  version: NODE_ENV.VERSION,
  nodeEnv: NODE_ENV.ENVIRONMENT
};

export default config;