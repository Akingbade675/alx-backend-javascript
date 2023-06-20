var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "New York"
};
var student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
    location: "New Jersey"
};
var studentsList = [student1, student2];
var table = document.getElementById("studentTable");
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell(0);
    var locationCell = row.insertCell(1);
    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
});
