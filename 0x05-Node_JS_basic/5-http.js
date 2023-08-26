const http = require('http');
const countStudents = require('./3-read_file_async'); // Assuming 3-read_file_async.js is in the same directory

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    const filePath = process.argv[2]
    countStudents(filePath)
      .then({})
      .catch(error => {
        res.end(error.message + '\n');
      });
  } else {
    res.end('Not Found\n');
  }
});

app.listen(1245, () => {});

module.exports = app;