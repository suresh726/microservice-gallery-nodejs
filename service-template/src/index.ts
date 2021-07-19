import db from './config/database.config';
import { rabbitmqWrapper } from './rabbitmq-wrapper';
import { logger } from './services/logger';
import { app } from './app';
import { AdminListener } from './events/admin-listener';
import { QueueNames } from '@slcdemogallery/common';

const start = async () => {
  logger.info({ message: 'Service category is starting' });

  db.sync().then(() => {
    logger.info({ message: 'DB is connected' });
  });

  try {
    await rabbitmqWrapper.connect('amqp://localhost');
    logger.info({ message: 'Connected to rabbitmq' });
    await rabbitmqWrapper.createChannel();

    if (!rabbitmqWrapper.connection) {
      throw new Error('Error creating rabbitmq connection');
    }

  } catch (err) {
    logger.error({ message: 'Error connecting to rabbitmq' });
    throw new Error('Error connecting to rabbitmq');
  }

  if (!rabbitmqWrapper.channel) {
    logger.error({ message: 'No such channel exists' });
    throw new Error('No such channel exists');
  }

  new AdminListener(rabbitmqWrapper.channel, QueueNames.Admin).listen();

  app.listen(3000, () => {
    console.log('Server listening to port 3000');
  });
}

start();



