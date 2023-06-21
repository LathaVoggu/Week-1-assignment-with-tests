/**## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
 */

const fs = require('fs');

function printContent(err){
    console.log("Data got added to File.");
}

 fs.writeFile("writeFile.txt", "Hey AMigo you are in the write direction", printContent);

 let sum=0;
 for(let i=0; i<1000000000; i++){
    sum += i;
 }
 console.log(sum); // first this will get print