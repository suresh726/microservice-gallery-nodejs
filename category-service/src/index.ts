import db from './config/database.config';
import { rabbitmqWrapper } from './rabbitmq-wrapper';
import { logger } from './services/logger';
import { app } from './app';
import { QueueNames } from '@slcdemogallery/common';

const start = async () => {
  const PORT_NUMBER = process.env.CATEGORY_SERVICE_PORT || 3000;

  logger.info({ message: 'Service category is starting' });

  db.sync().then(() => {
    logger.info({ message: 'DB is connected' });
  });

  try {
    await rabbitmqWrapper.connect('amqp://rabbitmq');
    logger.info({ message: 'Connected to rabbitmq' });
    await rabbitmqWrapper.createChannel();

    if (!rabbitmqWrapper.connection) {
      throw new Error('Error creating rabbitmq connection');
    }

  } catch (err) {
    logger.error({ message: 'Error connecting to rabbitmq' });
    process.exit();
    // throw new Error('Error connecting to rabbitmq');
  }

  if (!rabbitmqWrapper.channel) {
    logger.error({ message: 'No such channel exists' });
    throw new Error('No such channel exists');
  }

  app.listen(PORT_NUMBER, () => {
    console.log(`Server listening to port ${PORT_NUMBER}`);
  });
}

start();