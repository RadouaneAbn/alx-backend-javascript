import { readFile } from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.toString().trimEnd().split('\n');
        const studentFields = Object.create({});
        lines.shift();
        const numberOfStudents = lines.length;
        for (let i = 0; i < numberOfStudents; i += 1) {
          const line = lines[i].split(',');
          if (!(line[3] in studentFields)) {
            studentFields[line[3]] = [];
          }
          studentFields[line[3]].push(line[0]);
        }
        resolve(studentFields);
      }
    });
  });
}

export default readDatabase;
