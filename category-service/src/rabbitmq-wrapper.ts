import { Channel, connect, Connection } from 'amqplib';
import { logger } from './services/logger';

class RabbitMqWrapper {
  private _connection?: Connection;
  private _channel?: Channel;

  get connection() {
    if (!this._connection) {
      logger.error({ message: 'Attempt to access rabbitmq conn before intializing' });
    }
    return this._connection;
  }

  get channel() {
    if (!this._channel) {
      logger.error({ message: 'Attempt to access rabbitmq channel before intializing' });
    }
    return this._channel;
  }

  async connect(hostname: string): Promise<void> {
    this._connection = await connect(hostname);

    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  async createChannel() {
    if (!this._connection) {
      logger.error({ message: 'Attempt to access rabbitmq conn before intializing' });
    }
    this._channel = await this._connection!.createChannel();
  }
}

export const rabbitmqWrapper = new RabbitMqWrapper();