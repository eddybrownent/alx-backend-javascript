const express = require('express');

const app = express();
const port = 1245;

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
  const result = [];

  result.push(`Number of students: ${totalStudents}`);
  for (const [key, value] of Object.entries(fields)) {
    if (key !== 'field') {
      result.push(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
    }
  }

  return result.join('\n');
}

async function countStudents(fileName) {
  try {
    const data = await readFile(fileName, 'utf-8');
    return parseCSVData(data);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  try {
    const output = await countStudents(process.argv[2].toString());
    response.send(['This is the list of our students', output].join('\n'));
  } catch (error) {
    response.statusCode = 404;
    response.write('This is the list of our students\n');
    response.end('Cannot load the database');
  }
});

app.listen(port, () => {
});

module.exports = app;
