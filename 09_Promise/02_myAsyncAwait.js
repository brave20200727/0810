function longTimeWork(workFine = true, errorMsg = "failed!") {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (workFine) ? resolve(200) : reject(errorMsg);
        }, 1000)
    })
}

async function usingLongTimeWork() {
    try{
        var result = await longTimeWork(false);
        console.log(result);
    }
    catch(e) {
        console.log(e);
    }

}

usingLongTimeWork();