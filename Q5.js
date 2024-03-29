const student = {
    name : "Ayush",
    age: 16,
    major: 'B.com',
    GPA :4.8,
    isEnrolled: true
};

function displayStudentInfo(studentObj) {
    for (let prop in studentObj) {
        console.log(`${prop}: ${studentObj[prop]}`);
    }
}

// Call the function with the student object as an argument
displayStudentInfo(student);