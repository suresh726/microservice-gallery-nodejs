import { logger } from './services/logger';
import { app } from './app';

const start = async () => {
  const PORT_NUMBER = process.env.API_GATEWAY_PORT || 3000;
  
  logger.info({ message: 'API Gateway is starting' });

  app.listen(PORT_NUMBER, () => {
    console.log(`Server listening to port ${PORT_NUMBER}`);
  });
}

start();



