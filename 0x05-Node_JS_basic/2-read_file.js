const fs = require('fs');

function readCSVFile(fileName) {
  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    return fileContents.toString().split('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

function parseHeader(headerLine) {
  return headerLine.split(',');
}

function countStudentsFromFile(lines) {
  const students = {};
  const fields = {};
  let length = 0;

  for (let i = 1; i < lines.length; i += 1) {
    if (lines[i]) {
      length += 1;
      const field = lines[i].toString().split(',');

      if (Object.prototype.hasOwnProperty.call(students, field[3])) {
        students[field[3]].push(field[0]);
      } else {
        students[field[3]] = [field[0]];
      }

      if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
        fields[field[3]] += 1;
      } else {
        fields[field[3]] = 1;
      }
    }
  }

  const l = length;
  console.log(`Number of students: ${l}`);

  for (const [key, value] of Object.entries(fields)) {
    if (key !== 'field') {
      console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
    }
  }
}

function countStudents(fileName) {
  const lines = readCSVFile(fileName);
  const header = parseHeader(lines[0]);
  countStudentsFromFile(lines, header);
}

module.exports = countStudents;
