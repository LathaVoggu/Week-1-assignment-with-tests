/**
 * ## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
(Hint: setTimeout)
 */


let counter=0;
function printCounter(){
    console.clear();
    console.log(counter);
    counter += 1;
}

for( let i=1; i<100; i++){
    setTimeout(printCounter, (i*1000));
}

/**
 * To make it infinite loop clock is to add setTimeout(printCounter, 1000); end of the printCounter() and call it with setTimeout(printCounter, 1000);
 */