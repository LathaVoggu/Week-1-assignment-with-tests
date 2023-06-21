/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function waitModified(n) {
    return new Promise( (resolve) => {
        setTimeout(()=>{
            console.log(`${n} seconds got passed from modified method`)
        },n*1000);
    })
}

function printOnConsole(n){
    console.log(`${n} seconds got passed. from default method`)
}

function waitDefault(n) {
    let promise = new Promise(
                    function (resolve){
                    setTimeout(resolve,n*1000);
                    }
                )
    return promise;
}



let timeInSec = 2;
waitDefault(timeInSec).then(printOnConsole(timeInSec));
waitModified(timeInSec).then();