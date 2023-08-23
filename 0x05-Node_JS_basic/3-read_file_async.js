const fs = require('fs');

const { parse } = require('csv-parse');

const countStudents = (file) => {
  let num = 0;
  let numCs = 0;
  let numSwe = 0;
  const names = [];
  const cs = [];
  const swe = [];
  fs.createReadStream(file)
    .pipe(parse({ delimeter: ',', from_line: 2 }))
    .on('data', (row) => {
      num += 1;
      names.push(row[0]);
      if (row[3] === 'CS') {
        cs.push(row[0]);
        numCs += 1;
      }
      if (row[3] === 'SWE') {
        swe.push(row[0]);
        numSwe += 1;
      }
    })
    .on('end', () => {
      console.log(`Number of students: ${num}. List: ${names}`);
      console.log(`Number of students in CS: ${numCs}. List: ${cs}`);
      console.log(`Number of students in SWE: ${numSwe}. List: ${swe}`);
    })
    .on('error', () => {
      throw new Error('Cannot load the database');
    });
};
module.exports = countStudents;
