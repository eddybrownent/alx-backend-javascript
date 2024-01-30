const { readFile } = require('fs').promises;

function parseCSVData(data) {
  const lines = data.split('\n');
  const students = {};
  const fields = {};
  let length = 0;

  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i]) {
      length += 1;
      const field = lines[i].toString().split(',');

      students[field[3]] = students[field[3]] || [];
      students[field[3]].push(field[0]);

      fields[field[3]] = (fields[field[3]] || 0) + 1;
    }
  }

  const totalStudents = length - 1;
  console.log(`Number of students: ${totalStudents}`);

  for (const [key, value] of Object.entries(fields)) {
    if (key !== 'field') {
      console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
    }
  }
}

async function countStudents(fileName) {
  try {
    const data = await readFile(fileName, 'utf-8');
    parseCSVData(data);
    return data;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
