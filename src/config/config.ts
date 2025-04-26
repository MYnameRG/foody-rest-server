import IConfig from '../interfaces/config.interface';
import NODE_ENV from '../environments/environment';

const config: IConfig = {
  port: NODE_ENV.PORT || 3000,
  version: NODE_ENV.VERSION,
  nodeEnv: NODE_ENV.ENVIRONMENT
};

export default config;