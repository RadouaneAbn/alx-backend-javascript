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
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.setHeader('Content-Type', 'text/plain');
    countStudents(process.argv[2])
      .then((output) => {
      // console.log(output);
        res.write('This is the list of our students');
        res.write(output.trimEnd());
        res.end();
      })
      .catch(() => {
        res.statusCode = 404;
        // res.write();
        res.end('Cannot load the database');
      });
  }
}).listen(1245);

module.exports = app;
