import * as dotEnv from 'dotenv';
dotEnv.config();
let config = {
    IP: process.env.NODEJS_IP,
    PORT: process.env.PORT,
    MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
  };

export function normalizePort(val: string) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return 0;
  }

if (process.env.NODE_ENV === 'test') {
    config = { ...config};
  }

export { config };
