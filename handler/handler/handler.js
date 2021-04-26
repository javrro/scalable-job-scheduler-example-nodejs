const Queue = require('bull');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const myQueue = new Queue('my-queue', 'redis://host.docker.internal:6379');

const handler = async function(){
    myQueue.process(async function(job){
        console.log("processing new job: "+job.data.data);

        const { stdout, stderr } = await exec('node test-process.js');

        if (stderr) {
            console.error(`error: ${stderr}`);
        }
        console.log(`console log from handler: ${stdout}`);

        console.log("job completed!");
    });
}

module.exports = handler;