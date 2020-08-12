function longTimeWork(workFine = true, errorMessage = "test") {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            (workFine) ? resolve(20200812) : reject(errorMessage);
        }, 1000);
    })
}

function usingLongTimeWork() {
    longTimeWork(true, "This is error message!")  // try true/false
    .then(function (e) {
        console.log(e);
    })
    .catch(function (e) {
        console.log(e);
    })
}

usingLongTimeWork();
