const http = require('http');
const { readFile } = require('fs').promises;

const hostname = '127.0.0.1';
const port = 1245;

function parseCSVData(data, response) {
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
  response.write(`Number of students: ${totalStudents}\n`);

  for (const [key, value] of Object.entries(fields)) {
    if (key !== 'field') {
      response.write(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}\n`);
    }
  }
  response.end();
}

async function countStudents(fileName, response) {
  try {
    const data = await readFile(fileName, 'utf-8');
    response.write('This is the list of our students\n');
    await parseCSVData(data, response);
  } catch (error) {
    response.statusCode = 404;
    response.end('Cannot load the database');
  }
}

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    response.end('Hello Holberton School!');
  }

  if (request.url === '/students') {
    countStudents(process.argv[2], response);
  }
});

app.listen(port, hostname, () => {
});

module.exports = app;
