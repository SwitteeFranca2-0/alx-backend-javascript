const fs = require('fs');

const countStudents = (file) => new Promise((res, rej) => {
  const names = [];
  let num = 0;
  let numCs = 0;
  let numSwe = 0;
  const Cs = [];
  const Swe = [];
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      rej(new Error('Cannot load the database'));
    } else {
      const lines = data.split('\n');
      lines.slice(1).forEach((line) => {
        const fields = line.split(',');
        if (line !== '') {
          num += 1;
          names.push(fields[0]);
        }
        if (fields[3] === 'CS') {
          numCs += 1;
          Cs.push(fields[0]);
        }
        if (fields[3] === 'SWE') {
          numSwe += 1;
          Swe.push(fields[0]);
        }
      });
      console.log(`Number of students: ${num}. List: ${names}`);
      console.log(`Number of students in CS: ${numCs}. List: ${Cs}`);
      console.log(`Number of students in SWE: ${numSwe}. List: ${Swe}`);
      res();
    }
  });
});
module.exports = countStudents;
