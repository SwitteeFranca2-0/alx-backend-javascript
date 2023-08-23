const fs = require('fs')
const { parse } = require('csv-parse')
const countStudents = (file) => {
    let num = 0
    let num_cs = 0
    let num_swe = 0
    const names = []
    const cs = []
    const swe = []
    fs.createReadStream(file)
    .pipe(parse({delimeter: ",", from_line: 2}))
    .on("data", function(row){
        num += 1;
        names.push(row[0]);
        if (row[3] == 'CS'){
            cs.push(row[0]);
            num_cs += 1
        }
        if (row[3] == 'SWE') {
            swe.push(row[0])
            num_swe += 1
        }
    })
    .on('end', function(){
        console.log(`Number of students: ${num}. List: ${names}`);
        console.log(`Number of students in CS: ${num_cs}. List: ${cs}`);
        console.log(`Number of students in SWE: ${num_swe}. List: ${swe}`);
    })
    .on('error', function(error){
        throw new Error('Cannot load the database');
    })
}
module.exports = countStudents;
