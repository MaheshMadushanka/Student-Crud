
let studentName=document.getElementById("txt-std-name").value;
let studentAge=document.getElementById("txt-std-age").value;
let Address=document.getElementById("txt-grd-address").value;


document.getElementById("btn-reload-table").addEventListener("click", () => {
  fetch("http://localhost:8180/studentTable")
    .then((res) => res.json())
    .then((data) => {
      loadTable(data);
    })
    .catch((error) => {
      console.error("Error fetching student data:", error);
    });
});

tableBody = document.getElementById("tableBody");

function loadTable(students) {
    tableBody.innerHTML = "";
    students.forEach((student) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${student.stdName}</td>
        <td>${student.age}</td>
        <td>${student.address}</td>
      `;
      row.addEventListener("click", () => {
        showStudentDetails(student);
      });
      
      tableBody.appendChild(row);
    });
  }

  function showStudentDetails(student){   
    console.log(student.stdId+" ID") 
    document.getElementById("txt-std-name").value=student.stdName;
    document.getElementById("txt-std-age").value=student.age;
    document.getElementById("txt-grd-address").value=student.address;
    document.getElementById("img-std").href.baseVal="../image/boy.png";

    document.getElementById("btn-delete").addEventListener("click", () => {deleteStudent(student.stdId)});

    //document.getElementById("btn-update").onclick()

    
    document.getElementById("btn-update").addEventListener("click",() =>  editStudent(student));
    //studentDetailsViewer.style.display = "block";
  //studentTableViewer.style.display = "none";
  }


  function editStudent(student){
    let updatedName = document.getElementById("txt-std-name").value;
    let updatedAge = document.getElementById("txt-std-age").value;
    let updatedAddress = document.getElementById("txt-grd-address").value;

    if(studentName.value==="" || studentAge.value==="" || Address.value===""){
      alert("can't update with empty field...")
    }else{
      student.stdName = updatedName;
      student.age = updatedAge;
      student.address = updatedAddress;
      updateStudent(student);
    }
  }

function updateStudent(student){
   
    if (confirm("Are you sure you want to update this student?")) {
        fetch("http://localhost:8180/student/update", {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify(student)
        })
          .then((res) => {
            if (res.ok) {
              alert("Student Update successfully");
              location.reload();
            } else {
              alert("Error update student");
            }
          })
          .catch((error) => {
            console.error("Error update student:", error);
          });
      }
}

function deleteStudent(stdId){
    if (confirm("Are you sure you want to delete this student?")) {
        fetch(`http://localhost:8180/student/${stdId}`, {
          method: "DELETE"
        })
          .then((res) => {
            if (res.ok) {
              alert("Student deleted successfully");
              location.reload();
            } else {
              alert("Error deleting student");
            }
          })
          .catch((error) => {
            console.error("Error deleting student:", error);
          });
      }
}