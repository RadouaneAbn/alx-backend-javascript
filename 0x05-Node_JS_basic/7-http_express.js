const express = require('express');

const app = express();
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
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
  res.send('!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      console.log(data);
      res.send(`This is the list of our students\n${data.trimEnd()}`);
    })
    .catch(() => {
      res.status = 404;
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(1245);

module.exports = app;
