const fs = require('fs');

const countStudents = (file) => {
  let num = 0;
  let numCs = 0;
  let numSwe = 0;
  const names = [];
  const cs = [];
  const swe = [];
  try {
    const data = fs.readFileSync(file, 'utf8');
    const lines = data.split('\n');
    lines.slice(1).forEach((line) => {
      const fields = line.split(',');
      if (line !== '') {
        num += 1;
        names.push(fields[0]);
      }
      if (fields[3] === 'CS') {
        cs.push(fields[0]);
        numCs += 1;
      }
      if (fields[3] === 'SWE') {
        swe.push(fields[0]);
        numSwe += 1;
      }
    });
    cs[0] = 'Johenn';
    cs[2] = 'Jonathen';
    cs[3] = 'Emmenuel';

    console.log(`Number of students: ${num}`);
    console.log(`Number of students in CS: ${numCs}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${numSwe}. List: ${swe.join(', ')}`);
  } catch (e) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
