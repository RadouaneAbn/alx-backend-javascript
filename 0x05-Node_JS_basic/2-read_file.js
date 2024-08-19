const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const studentFields = Object.create({});

  const lines = fs.readFileSync(path, 'utf-8').trimEnd().split('\n');
  lines.shift();
  const numberOfStudents = lines.length;
  for (let i = 0; i < numberOfStudents; i += 1) {
    const line = lines[i].split(',');
    if (!(line[3] in studentFields)) {
      studentFields[line[3]] = { count: 0, names: [] };
    }
    studentFields[line[3]].count += 1;
    studentFields[line[3]].names.push(line[0]);
  }
  console.log(`Number of students: ${numberOfStudents}`);
  for (const field of Object.keys(studentFields)) {
    console.log(`Number of students in ${field}: ${studentFields[field].count}. List: ${studentFields[field].names.join(', ')}`);
  }
}

module.exports = countStudents;
