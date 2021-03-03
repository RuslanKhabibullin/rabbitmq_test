const queueName = 'rabbitmq_test.default_queue';

const handleQueueMessage = (channel) => (message) => {
  console.log("Received new message: %s", message.content.toString())
  channel.ack(message);
};
const queueListener = (channel) => {
  return channel.assertQueue(queueName, { durable: false }).then((_ok) => {
    return channel.consume(queueName, handleQueueMessage(channel))
  })
};
const connection = require('amqplib').connect(process.env.RABBITMQ_URL);

connection
  .then((connection) => connection.createChannel())
  .then(queueListener)
  .catch((reason) => console.log(reason));
