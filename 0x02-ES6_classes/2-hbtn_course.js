export default class HolbertonCourse {
  /* eslint-disable class-methods-use-this */
  constructor(name, length, students) {
    this._name = this.checkString(name, 'name');
    this._length = this.checkNumber(length, 'length');
    this._students = this.checkStudents(students, 'students');
  }

  // Getter & setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.checkString(newName, 'name');
  }

  // Getter & setter for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this.checkNumber(newLength, 'length');
  }

  // Getter & setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.checkStudents(newStudents, 'students');
  }

  // validate string
  checkString(value, attr) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attr} must be a string`);
    }
    return value;
  }

  // validate number
  checkNumber(value, attr) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attr} must be a number`);
    }
    return value;
  }

  // validate students
  checkStudents(value, attr) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError(`${attr} must be an array of strings`);
    }
    return value;
  }
}
