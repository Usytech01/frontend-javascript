
// 1. Define the Student interface
interface Student{
  firstName:string;
  lastName: string;
  age     : number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "Smith",
  lastName: "John",
  age: 30,
  location: "Lagos"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "John",
  age: 25,
  location: "Abuja"
};

// 3. Create an array containing the students
const studentsList: Student[] = [student1, student2];

// 4. Render a table in the DOM using Vanilla JS

const table: HTMLTableElement = document.createElement("table");
table.style.borderCollapse= "collapse";
table.style.width = "50%";
table.style.margin = "20px";
table.style.border ="1";

// Create header row
const headerRow = document.createElement("tr");

const headerFirstName = document.createElement("th");
headerFirstName.textContent = "First Name";
headerFirstName.style.padding = "8px";

const headerLocation = document.createElement("th");
headerLocation.textContent = "Location";
headerLocation.style.padding = "8px";

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

// Append rows for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell =document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.padding = "8px";

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.padding  = "8px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);

});