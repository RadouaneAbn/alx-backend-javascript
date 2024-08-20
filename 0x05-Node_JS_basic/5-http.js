const http = require('http');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const studentFields = Object.create({});

    const lines = data.trimEnd().split('\n');
    lines.shift();
    const numberOfStudents = lines.length;
    for (let i = 0; i < numberOfStudents; i += 1) {
      const line = lines[i].split(',');
      if (!(line[3] in studentFields)) {
        studentFields[line[3]] = [];
      }
      studentFields[line[3]].push(line[0]);
    }
    let output = `Number of students: ${numberOfStudents}\n`;
    for (const [field, students] of Object.entries(studentFields)) {
      output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }
    return output;
  } catch (err) {
    // console.error(err)
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  
  else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((output) => {
        res.write('This is the list of our students');
        res.end(output.trimEnd());
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
}).listen(1245);

module.exports = app;
