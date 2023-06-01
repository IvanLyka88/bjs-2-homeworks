function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty("marks")) {
    this.marks.push(...marks);
  } else {
    return 0;
  }
};

Student.prototype.getAverage = function () {
  if (this.marks === undefined || this.marks.length <= 0) {// проверка на пустоту масива и на наличие массива marks
    return 0;
  } else {
    return this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length;
  }
};

Student.prototype.exclude = function (reason) {
  this.excluded = reason;

  delete this.marks;
  delete this.subject;
};
