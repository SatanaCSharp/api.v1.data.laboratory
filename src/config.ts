
let config = {
    IP: process.env.NODEJS_IP || '127.0.0.1',
    PORT: process.env.PORT || normalizePort('3000'),
    MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/lab_data',
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
