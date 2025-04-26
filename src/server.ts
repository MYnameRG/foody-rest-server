import dotenv from 'dotenv';
dotenv.config();

import ApplicationServer from './app';

const server = new ApplicationServer();
server.start();