const Queue = require('bull');

const myQueue = new Queue('my-queue', 'redis://host.docker.internal:6379');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const handler = async function(){
    myQueue.process(async function(job){
        console.log("processing new job: "+job.data.data);
        await sleep(10000);
        console.log("job completed!");
    });
}

module.exports = handler;