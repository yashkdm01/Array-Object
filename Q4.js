const students = [
    {id: 1, name: "angad", age: 22, grade: "A"},
    {id: 2, name: "ragnar", age: 26, grade: "A"},
    {id: 3, name: "bandya", age: 34, grade: "A"},
]

//a.
function addStudent(newStudent) {
    students.push(newStudent);
}
const newStudent = { id: 4, name: "John Doe", age: 20, grade: "B" };
addStudent(newStudent);
console.log(students);

//b

function updateStudentInfo(id, updatedInfo) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students[index] = { ...students[index], ...updatedInfo };
    } else {
        console.log("Student not found!");
    }
}  
updateStudentInfo(2, { age: 27, grade: "A+" });
console.log(students);

//c

function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
    } else {
        console.log("Student not found!");
    }
}
deleteStudent(3);
console.log(students);

//d
function listAllStudents() {
    students.forEach(student => {
        console.log('ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}');
    });
}
listAllStudents();

//e
function findStudentsByGrade(targetGrade) {
    const filteredStudents = students.filter(student => student.grade === targetGrade);
    return filteredStudents;
}
const gradeAStudents = findStudentsByGrade("A");
console.log(gradeAStudents);

//f
function calculateAverageAge() {
    const totalAge = students.reduce((acc, student) => acc + student.age, 0);
    const averageAge = totalAge / students.length;
    return averageAge;
}
const averageAge = calculateAverageAge();
console.log(`Average Age: ${averageAge}`);