import { ENV } from './development.env';

import dotenv from 'dotenv';
dotenv.config();

let NODE_ENV: any = null;

if (process.env.NODE_ENV?.toString() == 'development') {
    NODE_ENV = ENV;
}

export default NODE_ENV;