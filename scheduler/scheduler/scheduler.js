const Queue = require('bull');

const myQueue = new Queue('my-queue', 'redis://host.docker.internal:6379');

const scheduler = async function(data){
  myQueue.add({
    data: data
  });
}

module.exports = scheduler;