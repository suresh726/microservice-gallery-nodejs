import db from './config/database.config';
import { rabbitmqWrapper } from './rabbitmq-wrapper';
import { logger } from './services/logger';
import { app } from './app';
import { AdminListener } from './events/admin-listener';
import { QueueNames } from '@slcdemogallery/common';

const start = async () => {
  const PORT = process.env.USER_SERVICE_PORT || 3000;

  logger.info({ message: 'Service user is starting' });

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

  new AdminListener(rabbitmqWrapper.channel, QueueNames.Admin).listen();
  
  app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
  });
}

start();



