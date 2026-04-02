/** Returns an RMQ options object for use with @nestjs/microservices */
export function getRmqOptions(queue: string) {
  const url = process.env.RABBITMQ_URL ?? 'amqp://dde_user:dde_pass@localhost:5672';
  return {
    urls: [url],
    queue,
    queueOptions: {
      durable: true,
      arguments: {
        // Dead-letter exchange for failed messages
        'x-dead-letter-exchange': 'dde.dlx',
        'x-dead-letter-routing-key': `${queue}.dead`,
      },
    },
    noAck: false,
    prefetchCount: 10,
  };
}
