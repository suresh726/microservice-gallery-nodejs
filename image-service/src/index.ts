import db from './config/database.config';
import { rabbitmqWrapper } from './rabbitmq-wrapper';
import { logger } from './services/logger';
import { app } from './app';
import { CategoryListener } from './events/category-listener';
import { QueueNames } from '@slcdemogallery/common';

const start = async () => {
  const PORT_NUMBER = process.env.IMAGE_SERVICE_PORT || 3000;

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
  }

  if (!rabbitmqWrapper.channel) {
    logger.error({ message: 'No such channel exists' });
    throw new Error('No such channel exists');
  }

  new CategoryListener(rabbitmqWrapper.channel, QueueNames.Category).listen();

  app.listen(PORT_NUMBER, () => {
    console.log(`Server listening to port ${PORT_NUMBER}`);
  });
}

start();



