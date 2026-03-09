//ARRAY OF EMPLOYEE OBJECTS
let employees = [
    {id: 1, name: "Amit", salary: 40000, department: "IT"},
    {id: 2, name: "Neha", salary: 55000, department: "HR"},
    {id: 3, name: "Rahul", salary: 30000, department: "IT"},
    {id: 4, name: "Priya", salary: 70000, department: "Finance"}
];
console.log("EMPLOYEES:", employees)
console.log("\n");


//CALCULATE: TOTAL SALARY
let total_salary = 0;
for (let emp of employees) {
    total_salary += emp.salary;
}
console.log("TOTAL SALARY:", total_salary);


//CALCULATE: AVERAGE SALARY
let count = employees.length;
let average_salary = total_salary / count;
console.log("AVERAGE SALARY:", average_salary);
console.log("\n");


//FIND: FIND BY DEPARTMENT
let department = "IT";
console.log("EMPLOYEE WHOSE DEPARTMENT IS IT:")
for (let emp of employees) {
    if (emp.department === department) {
        console.log(emp);
    }
}
console.log("\n");


//CREATE NEW OBJECT
let department_salary = {};
for (let emp of employees) {
    let department_key = emp.department;
    if (!department_salary[department_key]) {
        department_salary[department_key] = 0;
    }
    department_salary[department_key] += emp.salary;
}
console.log("DEPARTMENTWISE TOTAL SALARY:", department_salary );
console.log("\n");


// UPDATE: UPDATE NAME NEHA TO RITA
for (let emp of employees) {
    if (emp.name === "Neha") {
        emp.name = "Rita";
    }
}
console.log("UPDATED NAME NEHA TO RITA:",employees);
console.log("\n");


//DELETE: DELETE EMPLOYEE WHERE ID-3
for (let i = 0; i < count; i++) {
    if (employees[i].id === 3) {
        employees.splice(i, 1);
        break;
    }
}
console.log("AFTER DELETION OF ID 3:", employees);
