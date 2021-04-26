const consumer = require('./kafka/consumer');
const scheduler = require('./scheduler/scheduler');

consumer(scheduler);

console.log("Starting scheduler...")