const kafka = require('./config');
const consumer = kafka.consumer({ groupId: 'test-group-scheduler' })

const consumeKafka = async function(callback){
    await consumer.connect()

    await consumer.subscribe({ topic: 'test-task', fromBeginning: true })

    await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        console.log("new task recibido" + {
            value: message.value.toString(),
        });
        callback(message.value.toString());
    },
    });
}

module.exports = consumeKafka;