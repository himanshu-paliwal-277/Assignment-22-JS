// Q.4 Assignment: Building a Student Management System
// Description:
// You are tasked with building a student management system using JavaScript. The system should allow you to perform various operations on a list of students, including adding, updating, deleting, and displaying student information.
// Requirements:
// here is an initial array of students. Each student is represented as an object with the following properties: id, firstName, lastName, age, and grade.

// Implement the following functions using pure JavaScript (without any external libraries or frameworks):
// a. Add a Student: Create a function to add a new student to the array.
// b. Update Student Information: Create a function to update a student's information based on their id.
// c. Delete a Student: Create a function to delete a student based on their id.
// d. List All Students: Create a function to display a list of all students.
// e. Find Students by Grade: Create a function to find all students who have a specific grade.
// f. Calculate Average Age: Create a function to calculate the average age of all students using array method.

// Code
let students = [
  { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
  { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
  { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },
];
// console.log(students)

// a) Add a Student:
function addNewStudent(newStudent) {
  students.push(newStudent);
}

// b) Update Student Information:
function updateStudentInformation(id , updateStudent){
  students.forEach((element, index) => {
    if(element.id === id){
      students[index] = {...students[index], ...updateStudent};
    }
  })
}

// c) Delete a Student:
function deleteStudent(id){
  students = students.filter((element) => (element.id !== id));
}

// d) List All Students:
function displayListOfStudent(){
  console.log('Listing all students:');
  students.forEach((student) => {
    console.log(`Id: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
  });
}

// e) Find Students by Grade:
function findStudentByGrade(grade) {
  let studentFilterByGrade = students.filter((element) => (element.grade === grade));
  return studentFilterByGrade;
}

// f) Calculate Average Age:
function calculateAverageAgeOfStudent(){
  let sum = 0;
  students.forEach((element) => {
    sum += element.age;
  });
  const average = sum/students.length;
  return average;
}

// Example:
addNewStudent({ id: 4, firstName: "himanshu", lastName: "paliwal", age: 20, grade: "A" });
updateStudentInformation(2, {firstName: "Rohit", lastName: "Sharma", age: 25, grade: "B" })
deleteStudent(3)
displayListOfStudent();
const studentsOfGradeA = findStudentByGrade('A');
console.log('Students in Grade A:', studentsOfGradeA);
const averageAge = calculateAverageAgeOfStudent();
console.log('Average Age:', averageAge.toFixed(2));