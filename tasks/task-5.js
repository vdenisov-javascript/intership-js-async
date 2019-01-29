const fs = require('fs');
const path = require('path');

const numberOfLastLines =
  Math.abs( parseInt(process.argv[3]) ) || 10;
const relativePath = process.argv[4];

const absolutePath = path.join( __dirname, '../', relativePath );

const readStream = fs.createReadStream(absolutePath, 'utf-8');
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
    console.log(string);
  }
})

