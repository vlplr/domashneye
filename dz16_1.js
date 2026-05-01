class Student {
  constructor(name, surname, birthYear, grades = []) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.grades = grades;

    this.attendance = new Array(25);
    this.attendanceIndex = 0;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((a, b) => a + b, 0);
    return sum / this.grades.length;
  }

  present() {
    if (this.attendanceIndex >= 25) {
      console.log("Уже заповнено всі 25 занять");
      return;
    }
    this.attendance[this.attendanceIndex++] = true;
  }

  absent() {
    if (this.attendanceIndex >= 25) {
      console.log("Уже заповнено всі 25 занять");
      return;
    }
    this.attendance[this.attendanceIndex++] = false;
  }

  // итог
  summary() {
    const avgGrade = this.getAverageGrade();

    const validAttendance = this.attendance.filter(v => v !== undefined);
    const attendanceRate =
      validAttendance.length === 0
        ? 0
        : validAttendance.filter(v => v === true).length / validAttendance.length;

    if (avgGrade > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (avgGrade > 90 || attendanceRate > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("Іван", "Петренко", 2005, [95, 92, 96]);
const student2 = new Student("Олег", "Іванов", 2004, [70, 75, 80]);
const student3 = new Student("Марія", "Коваль", 2006, [91, 93, 89]);

// посещаемость
for (let i = 0; i < 23; i++) student1.present();
student1.absent();
student1.present();

for (let i = 0; i < 15; i++) student2.present();
for (let i = 0; i < 10; i++) student2.absent();

for (let i = 0; i < 24; i++) student3.present();
student3.absent();

// вывод
console.log(student1.getAge(), student1.getAverageGrade(), student1.summary());
console.log(student2.getAge(), student2.getAverageGrade(), student2.summary());
console.log(student3.getAge(), student3.getAverageGrade(), student3.summary());