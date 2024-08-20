const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const studentFields = {};

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
    console.log(`Number of students: ${numberOfStudents}`);
    for (const [field, students] of Object.entries(studentFields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    // console.error(err)
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
