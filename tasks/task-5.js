const fs = require('fs');
const path = require('path');


const numberOfLastLines = Math.abs( parseInt(process.argv[3]) ) || 10;

// INPUT file {
const inputRelativePath = process.argv[4];
const inputAbsolutePath = path.join( __dirname, '../', inputRelativePath );
// } INPUT file

// OUTPUT file {
const outputRelativePath = process.argv[5];
const outputAbsolutePath = path.join( __dirname, '../', outputRelativePath );
// } OUTPUT file

// streams {
const readStream = fs.createReadStream(inputAbsolutePath, { encoding: 'utf-8', flags: 'r' });
const writeStream = fs.createWriteStream(outputAbsolutePath, { encoding: 'utf-8', flags: 'w' });
// } streams


let totalStrings = [];

readStream.on('data', fragment => {
  const newStrings = fragment.split('\n');
  totalStrings.push(...newStrings);
  if (newStrings.length >= numberOfLastLines) {
    totalStrings = totalStrings.slice(-1 * numberOfLastLines);
  }
});

readStream.on('end', () => {
  readStream.close();
  for (let string of totalStrings) {
    // console.log(string);
    writeStream.write(string + '\n');
  }
})

