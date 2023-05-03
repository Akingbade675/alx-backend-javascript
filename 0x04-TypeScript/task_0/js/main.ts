interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 24,
  location: "New Jersey",
};

const studentsList: Array<Student> = [student1, student2];

const table = document.getElementById("studentTable") as HTMLTableElement;

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
});
