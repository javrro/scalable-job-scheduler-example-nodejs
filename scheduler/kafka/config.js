const {Kafka} = require('kafkajs');

const config = {
    clientId: 'test-app',
    brokers: ['host.docker.internal:9092']
}

const kafka = new Kafka(config);

module.exports = kafka;