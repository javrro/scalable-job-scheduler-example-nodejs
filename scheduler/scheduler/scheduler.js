const Queue = require('bull');

const myQueue = new Queue('my-queue', 'redis://host.docker.internal:6379');

const job = async function(data){
  myQueue.add({
    data: data
  });
}

module.exports = job;