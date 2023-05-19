setInterval(function printHeapUsage() {
    const mu = process.memoryUsage()
    const gbNow = mu.heapUsed / 1024 / 1024 / 1024
    const gbRounded = Math.round(gbNow * 100) / 100
    console.log(`Heap allocated ${gbRounded} GB`)
    global.gc() // Call garbage collection
}, 5000)

async function main() {
    let i = 0
    while (i++ < 500_000) {
        require('./leaking_ajv').ajv.compile({})
        await new Promise(setImmediate)
    }
    console.log('Done')
}
setTimeout(main, 5000)

