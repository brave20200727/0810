function longTimeWork(workFine = true, errorMsg = "failed!") {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            (workFine) ? resolve("successful!") : reject(errorMsg);
        }, 1000);
    });
}

function usingLongTimeWork() {
    longTimeWork()
    .then((e) => console.log(e))
    .catch((e) => console.log(e))
}

usingLongTimeWork();