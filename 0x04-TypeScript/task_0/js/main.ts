interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,    
}


const student1: Student =  {
    firstName: 'Joshua',
    lastName: 'Agbeke',
    age: 30,
    location: 'Ho'
}

const student2: Student =  {
    firstName: 'Bubune',
    lastName: 'Mensah',
    age: 47,
    location: 'Accra'
}

const studentsList = [student1, student2]

function createTable(studentsList: Array<Student>) {
    const table = document.createElement("table");
    table.border = "1";

    const headerRow = table.insertRow();
    const header1 = document.createElement("th");
    const header2 = document.createElement("th");
    header1.textContent = "FirstName";
    header2.textContent = "Location";
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);

    for (const val of studentsList) {
      const row: HTMLTableRowElement = table.insertRow();
      
      const firstNameCell: HTMLTableCellElement = row.insertCell();
      const locationCell: HTMLTableCellElement = row.insertCell();
      firstNameCell.textContent = val.firstName;
      locationCell.textContent = val.location;
    }
  
    document.body.appendChild(table); 
}

createTable(studentsList)
