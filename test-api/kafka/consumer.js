const kafka = require('./config');
const consumer = kafka.consumer({ groupId: 'test-group' })

const consumeKafka = async function(){
    await consumer.connect()

    await consumer.subscribe({ topic: 'test-task-done', fromBeginning: true })

    await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        console.log("test task done" + {
            value: message.value.toString(),
        });
    },
    });
}

module.exports = consumeKafka;