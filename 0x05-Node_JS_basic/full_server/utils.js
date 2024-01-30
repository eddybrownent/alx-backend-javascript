const { readFile } = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    const students = {};

    readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n');
        const noHeader = lines.slice(1);

        for (let i = 0; i < noHeader.length; i += 1) {
          if (noHeader[i]) {
            const field = noHeader[i].split(',');
            const fieldName = field[3];

            if (students[fieldName]) {
              students[fieldName].push(field[0]);
            } else {
              students[fieldName] = [field[0]];
            }
          }
        }

        resolve(students);
      }
    });
  });
}

module.exports = readDatabase;
