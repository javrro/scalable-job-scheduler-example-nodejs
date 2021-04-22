const kafka = require('./config');

const producer = kafka.producer();

const produceKafka = async function(taskId){
    await producer.connect();

    await producer.send({
        topic: 'test-task',
        messages: [
            {value: taskId.toString()},
        ]
    });

    console.log("message sent!");

    await producer.disconnect();
}

module.exports = produceKafka;