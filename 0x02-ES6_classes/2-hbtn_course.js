/**
 * A holberton course project
 */
export default class HolbertonCourse {
  /**
     * Create a class HolbertonCourse
     * @param {number} length - The length of the course fro each student
     * @param {string} name - The name the course
     * @param {string[]} students - The name of the students
     */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof (val) !== 'string') {
      throw new TypeError('Name must be string');
    }
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof (val) !== 'number') {
      throw new TypeError('Length must be string');
    }
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!(val instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (val.some((num) => typeof (num) !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = val;
  }
}
