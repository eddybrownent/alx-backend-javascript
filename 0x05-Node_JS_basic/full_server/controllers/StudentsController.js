const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2].toString())
      .then((data) => {
        const fields = Object.keys(data).sort();

        res.status(200).send(`This is the list of our students\n${
          fields.map((field) => {
            const studentsInField = data[field].length;
            const firstNamesList = data[field].join(', ');
            return `Number of students in ${field}: ${studentsInField}. List: ${firstNamesList}`;
          }).join('\n')}`);
      })
      .catch((error) => {
        res.status(500).send(`Cannot load the database. ${error.message}`);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2].toString())
      .then((data) => {
        const studentsInMajor = data[major] || [];
        const firstNamesList = studentsInMajor.join(', ');

        res.status(200).send(`List: ${firstNamesList}`);
      })
      .catch((error) => {
        res.status(500).send(`Cannot load the database. ${error.message}`);
      });
  }
}

module.exports = StudentsController;
