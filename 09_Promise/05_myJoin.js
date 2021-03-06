function happy(data, timeCount) {
    return new Promise(
        function(resolve, reject) {
            setTimeout(function() {resolve(data)}, timeCount);
        }
    )
}

function sad(data, timeCount) {
    return new Promise(
        function(resolve, reject) {
            setTimeout(function() {resolve(data)}, timeCount);
        }
    )
}

async function living() {
    let promise1 = happy(200 , 2000);
    let promise2 = happy(300, 3000);
    let result1 = await promise1;
    let result2 = await promise2;

    let total = result1 + result2;
    console.log("Total:", total);
}

living();