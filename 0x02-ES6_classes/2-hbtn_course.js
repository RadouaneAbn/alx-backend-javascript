export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw (new Error('Name must be a string'));
    } else if (typeof length !== 'number') {
      throw (new Error('Length must be a number'));
    } else if (!Array.isArray(students)) {
      throw (new Error('Students must be an array'));
    } else if (students.forEach((student) => typeof student === 'string')) {
      throw (new Error('Students must be an array of strings'));
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    this._name = name;
  }

  set length(length) {
    this._length = length;
  }

  set students(students) {
    this._students = students;
  }
}
