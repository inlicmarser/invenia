class MySchool {
  static student: [string, string];

  constructor() {
    MySchool.student = ['Van Halen', '5150'];
  }
}

// Usage
const school = new MySchool();
console.log(MySchool.student); // Output: ['Van Halen', '5150']
