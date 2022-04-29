const courses = [
  { _id: 1, title: "JavaScript I" },
  { _id: 2, title: "HTML y CSS I" },
];

const students = [
  { _id: 1, name: "Pedro Perez" },
  { _id: 2, name: "Maria Gomez" },
];

const enrollments = [
  { course_id: 1, student_id: 1 },
  { course_id: 2, student_id: 1 },
  { course_id: 2, student_id: 2 },
];

const [course1, course2] = courses;
const { _id: idJs, title: js } = course1;
const { _id: idHc, title: hc } = course2;
//console.log(c);
const [student1, student2] = students;
const { _id: idPp, name: pp } = student1;
const { _id: idMg, name: mg } = student2;
const [item1, item2, item3] = enrollments;

console.log(`- ${js} \n  * ${pp} \n- ${hc} \n  * ${pp} \n  * ${mg}`);
console.log(`- ${pp} \n  * ${js}  \n  * ${hc}\n- ${mg} \n  * ${hc}`);
