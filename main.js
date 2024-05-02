const students = [
    {
        nome: 'Gabo',
        nota: 9.8
    },
    {
        nome: 'Nildo',
        nota: 6.0
    },
    {
        nome: 'Maurício',
        nota: 5.0
    },
    {
        nome: 'Ana Catarina',
        nota: 10.0
    },
    {
        nome: 'Berenice',
        nota: 8.5
    }
];


const approvedStudents = students.filter(student => student.nota >= 6.0);

console.log(approvedStudents);