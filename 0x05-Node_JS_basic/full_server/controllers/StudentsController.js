import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    response.status = 200;
    readDatabase(process.argv[2])
      .then((data) => {
        let output = 'This is the list of our students\n';
        const sortedData = Object.entries(data).sort((a, b) => a[0].localeCompare(b[0], undefined, { sensitivity: 'base' }));
        for (const [key, value] of sortedData) {
          output += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
        }
        response.send(output.trimEnd());
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    // response.status = 200;
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status = 500;
      response.send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(process.argv[2])
      .then((data) => {
        response.send(`List: ${data[major].join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
