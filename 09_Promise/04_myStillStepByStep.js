function happy(data, timeCount) {
    return new Promise(
        (resolve , reject) => {
            setTimeout(() => resolve(data), timeCount)
        }
    )
}

function sad(data, timeCount) {
    return new Promise(
        (resolve , reject) => {
            setTimeout(() => resolve(data), timeCount)
        }
    )
}

async function living() {
    let total = 0;
    let result1 = await happy(200, 2000);
    console.log(result1);
    let result2 = await sad(-100, 3000);
    console.log(result2);
    total = result1 + result2;
    console.log("Total:", total);
}

living();