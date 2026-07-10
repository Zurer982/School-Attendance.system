const attendanceTable = document.getElementById("attendanceTable");

let attendance = JSON.parse(localStorage.getItem("attendance")) || [];


showAttendance();


function markAttendance(status){

const student = {
serial: document.getElementById("serialNumber").value,
roll: document.getElementById("rollNumber").value,
name: document.getElementById("studentName").value,
father: document.getElementById("fatherName").value,
school: document.getElementById("schoolName").value,
headMaster: document.getElementById("headMaster").value,
teacher: document.getElementById("teacherName").value,
class: document.getElementById("studentClass").value,
dob: document.getElementById("dob").value,
admission: document.getElementById("admissionDate").value,
date: document.getElementById("attendanceDate").value,
time: document.getElementById("attendanceTime").value,
day: document.getElementById("attendanceDay").value,
status: status
};

attendance.push(student);
console.log(student);

localStorage.setItem("attendance", JSON.stringify(attendance));

showAttendance();

}
function showAttendance(){

attendanceTable.innerHTML = "";

attendance.forEach((student,index)=>{

attendanceTable.innerHTML += `
<tr>
<td>${student.serial}</td>
<td>${student.roll}</td>
<td>${student.name}</td>
<td>${student.father}</td>
<td>${student.school}</td>
<td>${student.headMaster}</td>
<td>${student.teacher}</td>
<td>${student.class}</td>
<td>${student.dob}</td>
<td>${student.admission}</td>
<td>${student.date}</td>
<td>${student.time}</td>
<td class="${student.day==="Sunday"?"sunday":""}">${student.day}</td>
<td class="${student.status==="Absent"?"absent":"present"}">${student.status}</td>
<td>
<button onclick="editStudent(${index})">✏️ Edit</button>
<button onclick="deleteStudent(${index})">🗑 Delete</button>
</td>
</tr>
`;

});

}
function editStudent(index){

document.getElementById("serialNumber").value = attendance[index].serial;
document.getElementById("rollNumber").value = attendance[index].roll;
document.getElementById("studentName").value = attendance[index].name;
document.getElementById("fatherName").value = attendance[index].father;
document.getElementById("schoolName").value = attendance[index].school;
document.getElementById("headMaster").value = attendance[index].headMaster;
document.getElementById("teacherName").value = attendance[index].teacher;
document.getElementById("studentClass").value = attendance[index].class;
document.getElementById("dob").value = attendance[index].dob;
document.getElementById("admissionDate").value = attendance[index].admission;
document.getElementById("attendanceDate").value = attendance[index].date;
document.getElementById("attendanceTime").value = attendance[index].time;
document.getElementById("attendanceDay").value = attendance[index].day;

attendance.splice(index,1);
localStorage.setItem("attendance", JSON.stringify(attendance));
showAttendance();

}

function deleteStudent(index){

attendance.splice(index,1);
localStorage.setItem("attendance", JSON.stringify(attendance));
showAttendance();

}
document.getElementById("search").addEventListener("keyup", function () {

let value = this.value.toLowerCase();

let rows = document.querySelectorAll("#attendanceTable tr");

rows.forEach(row => {

let text = row.innerText.toLowerCase();

row.style.display = text.includes(value) ? "" : "none";

});

});
function downloadPDF(){

const { jsPDF } = window.jspdf;

let pdf = new jsPDF();

pdf.text("School Attendance System",10,10);

pdf.save("Attendance_Report.pdf");

}
