const kafka = require('./config');

const producer = kafka.producer();

const produceKafka = async function(){
    await producer.connect();

    await producer.send({
        topic: 'test-task-done',
        messages: [
            {value: "task completado"},
        ]
    });

    await producer.disconnect();
}

module.exports = produceKafka;