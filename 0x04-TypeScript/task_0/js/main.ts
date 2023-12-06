// interface named Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
// Create two students
const studentOne: Student = {
    firstName: "Edwin",
    lastName: "Mburu",
    age: 20,
    location: "Nairobi"
  };
  
const studentTwo: Student = {
    firstName: "Debra",
    lastName: "Mburu",
    age: 22,
    location: "Thika"
  };

// Create an array named studentsList containing the two variables
const studentsList: Student[] = [studentOne, studentTwo];

// Render a table and append a new row for each element in the array
const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);