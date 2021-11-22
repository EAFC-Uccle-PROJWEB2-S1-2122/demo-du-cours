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

const upperCasedStudents = [];
for (let i = 0; i < students.length; i++) {
    upperCasedStudents[i] = students[i].toUpperCase();
}

upperCasedStudents.sort();

for (let i = 0; i < upperCasedStudents.length; i++) {
    console.log(upperCasedStudents[i]);
}
