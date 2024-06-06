interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 26,
    location: 'morocco'
}

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 24,
    location: 'morocco'
}

const students: Student[] = [
    student1, student2
]

const studentsList : Student[] = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const th1: HTMLTableCellElement = document.createElement("th");
const th2: HTMLTableCellElement = document.createElement("th");

th1.innerText = 'First Name';
th2.innerText = 'Location';

thead.append(th1);
thead.append(th2);

table.append(thead);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr')
  const col1: HTMLTableCellElement = document.createElement('td');
  const col2: HTMLTableCellElement = document.createElement('td');

  col1.innerText = student.firstName;
  col2.innerText = student.location;

  row.append(col1);
  row.append(col2);

  table.append(row);
});
body.append(table)
