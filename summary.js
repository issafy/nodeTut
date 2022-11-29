// # First thing
// const amount = 12;
// console.log(amount < 10 ? 'small number' : 'large number');
// console.log('Node app attempt 1!');
// # First thing

// ! DANGER: Callback Hell imminent
const { readFile, writeFile } = require('fs');
console.log('start');
readFile(
    './content/first.txt',
    'utf-8',
    (err, result) => {

        if (err) {
            console.log(err);
        }
        const first = result;
        console.log('First read Over');
        readFile(
            './content/first.txt',
            'utf-8', 
            (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Second read Over');
                const second = result;
                writeFile(
                    './content/subfolder/newFile.txt', 
                    '\nThe updated text file!', 
                    { flag: 'a' }, 
                    (err, result) => {
                        if(err) {
                            console.log(err);
                        }
                        console.log('Writing Over');
                    }
                );
            }
        );
    }
);
console.log('end');
// ! DANGER: Callback Hell imminent