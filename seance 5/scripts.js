const students = [
    "Saïd",
    "Martin",
    "Jaures",
    "Protégé",
    "Olivier",
    "Appolon",
    "Exaucé",
    "Nadir",
    "Oumar",
    "Ivan Steve"
];

const upperCasedStudents = students.map((student) => {
    return student.toUpperCase();
});
upperCasedStudents.sort();

upperCasedStudents.forEach((student) => {
    console.log(student);
});
