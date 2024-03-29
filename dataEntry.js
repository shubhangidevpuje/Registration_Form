let employeeName = document.getElementById('empname');
let employeeID = document.getElementById('empid');
let employeeAddress = document.getElementById('address');
let employeedesignation = document.getElementById('designation');
let employeedepartment = document.getElementById('department');
let employeeSalary = document.getElementById('salary');

let selectedRow = null;

function employeeDataManagement() {
	let employeeData = fetchEmployeeData();
	if (selectedRow==null) 
	{
		newDataInserted(employeeData);
	}
	else
	{
		updateRow(employeeData);
	}
	clearFields();
}
function fetchEmployeeData(){
	let employeeData={};
	employeeData.employeeName=employeeName.value;
	employeeData.employeeID=employeeID.value;
	employeeData.employeeAddress=employeeAddress.value;
	employeeData.employeedesignation=employeedesignation.value;
	employeeData.employeedepartment=employeedepartment.value;
	employeeData.employeeSalary=employeeSalary.value;

	return employeeData;
}
function displayData() {
    // let.tbody = document.getElementById("table-body");
    // let.newRow = tbody.insertRow(0);
    // let.cell0 = newRow.insertCell(0);
}
function newDataInserted(employeeData) {
    let tbody = document.getElementById("table-body");
    let newRow = tbody.insertRow(0);

    let cell0 = newRow.insertCell(0);
    cell0.innerHTML = employeeData.employeeName;

    let cell1 = newRow.insertCell(1);
    cell1.innerHTML = employeeData.employeeID;

    let cell2 = newRow.insertCell(2);
    cell2.innerHTML = employeeData.employeedesignation;

    let cell3 = newRow.insertCell(3);
    cell3.innerHTML = employeeData.employeedepartment;

    let cell4 = newRow.insertCell(4);
    cell4.innerHTML = employeeData.employeeSalary;

    let cell5 = newRow.insertCell(5);
    cell5.innerHTML = employeeData.employeeAddress;

	selectedRow=null;
    
}



function editEmployeeData(obj) {
	selectedRow = obj.parentElement.parentElement;
	employeeName.value = selectedRow.cells[0].innerHTML;
	employeeID.value = selectedRow.cells[1].innerHTML;
	employeedesignation.value = selectedRow.cells[2].innerHTML;
	employeedepartment.value = selectedRow.cells[3].innerHTML;
	employeeSalary.value = selectedRow.cells[4].innerHTML;
	employeeAddress.value = selectedRow.cells[5].innerHTML;
}

function updateRow(employeeData)
{
	selectedRow.cells[0].innerHTML = employeeName.value;
	selectedRow.cells[1].innerHTML = employeeID.value;
	selectedRow.cells[2].innerHTML = employeedesignation.value;
	selectedRow.cells[3].innerHTML = employeedepartment.value;
	selectedRow.cells[4].innerHTML = employeeSalary.value;
	selectedRow.cells[5].innerHTML = employeeAddress.value;
}
function deleteEmployeeData(obj)
{
	let row = obj.parentElement.parentElement;
	if (confirm()) 
	{
		document.getElementById("table-body").deleteRow(row.index(row));
	}
}