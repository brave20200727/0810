function happy(data, timeCount) {
    return new Promise(
        function(resolve ,reject) {
            setTimeout(function() {resolve(data)}, timeCount)
        }
    )
}

function sad(data, timeCount) {
    return new Promise(
        function(resolve ,reject) {
            setTimeout(function() {resolve(data)}, timeCount)
        }
    )
}

async function living() {
    let promise1 = happy(200, 2000);
    let promise2 = sad(300, 3000);
    let [result1, result2] = await Promise.all([promise1, promise2]);
    
    let total = result1 + result2;
    console.log("Total:", total);
}

living();