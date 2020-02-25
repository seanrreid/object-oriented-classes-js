class Teacher extends Person {
  teach(subject) {
    return `${this.name} teaches ${subject}`;
  }
}

const meTeacher = new Teacher('Sean');
console.log(meTeacher.teach('webdev with classes'));
