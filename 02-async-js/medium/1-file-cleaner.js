/**
 * ## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
 */


const fs = require('fs');

function clean(data){
    let words = data.split(" ");
   // console.log(words);
    let answeArray = [];
    for (let i=0; i<words.length; i++){
        if(words[i].length>0){
            answeArray.push(words[i]);
        }
    }
    //console.log(answeArray);
    let cleansedStr = answeArray.join(" ");
    console.log(cleansedStr);
    return cleansedStr;
}

function printContent(err, content){
    if(err){ 
        console.log(err);
        return;
    }
    let cleanedData = clean(content);
    fs.writeFile("readFile.txt",cleanedData , printAfterWrite);
}

function printAfterWrite(err){
    console.log("cleaned data got add to file");
}

 fs.readFile("readFile.txt", 'utf8', printContent); 