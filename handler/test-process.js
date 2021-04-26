function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main(){
    console.log("running 10 seconds process...");
    await sleep(10000);
    console.log("process finished!");
}

main();