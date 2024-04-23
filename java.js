
document.getElementById("student-form").addEventListener('submit',(Event) => {
    Event.preventDefault();
    const rollNo = document.getElementById("roll-no").value;
    const name = document.getElementById("name").value;
 const batch= document.getElementById("select").value;
 const section = document.getElementById("section").value;

 const data={
     rollNo : rollNo,
    Name : name,
    Batch : batch,
    Section : section
 };

 const actualData = JSON.stringify(data);
 console.log(actualData);
sessionStorage.setItem("studentDetails" , actualData);
alert("student details has been stored in session");

document.getElementById("student-form").reset();

});
