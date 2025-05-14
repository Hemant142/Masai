// ## **10. Employee Grouping and Sorting**

// You have been provided with an array of employee objects. Each employee object contains the
// following properties: **`name`**, **`age`**, **`salary`**, and **`department`**. Your task is
//  to create a function **`groupByDepartment`** that takes this array of employees as input and
//   returns an object where employees are grouped by their departments. Additionally, within each
//   department, the employees should be sorted in ascending order based on their ages.

// Write a function **`groupByDepartment`** that performs the following tasks:

// 1. Group the employees by their departments.
// 2. Sort the employees within each department based on their ages in ascending order.
// 3. Return an object where keys are department names and values are arrays containing employees
//  sorted by age.

// Ensure that the function handles the case where there are no employees in a particular department.

const employees = [
  { name: "Alice", age: 30, salary: 50000, department: "HR" },
  { name: "Bob", age: 35, salary: 60000, department: "Finance" },
  { name: "Charlie", age: 28, salary: 55000, department: "HR" },
  { name: "David", age: 40, salary: 70000, department: "IT" },
  { name: "Eve", age: 32, salary: 65000, department: "Finance" },
];

function groupByDepartment(employees) {
  let obj = {};
  for (let i = 0; i < employees.length; i++) {
    if (obj[employees[i].department] == undefined) {
      obj[employees[i].department] = [employees[i]];
    } else {
      obj[employees[i].department] = [
        ...obj[employees[i].department],
        employees[i],
      ];
    }
  }

  for (let key in obj) {
    key = obj[key].sort((a, b) => a.age - b.age);
  }
  return obj;
}

console.log(groupByDepartment(employees));

// {
//     HR: [
//       { name: 'Charlie', age: 28, salary: 55000 },
//       { name: 'Alice', age: 30, salary: 50000 }
//     ],
//     Finance: [
//       { name: 'Eve', age: 32, salary: 65000 },
//       { name: 'Bob', age: 35, salary: 60000 }
//     ],
//     IT: [
//       { name: 'David', age: 40, salary: 70000 }
//     ]
//   }
