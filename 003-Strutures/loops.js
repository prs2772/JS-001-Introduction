var students = ['Mary', 'Serch', 'Rose', 'Daniel']

function greetStudents(student){
  console.log(`Hi, ${student}`)
}

for(let studentNumber = 0; studentNumber < students.length; studentNumber++){
  greetStudents(students[studentNumber])
}

let studentNumber = 0
while(studentNumber < students.length){
  greetStudents(students[studentNumber])
  studentNumber++
}
