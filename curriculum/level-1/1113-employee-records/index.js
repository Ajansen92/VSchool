// Step 1: Create an empty array for employees
let employees = [];

// Step 2: Define the Employee constructor
function Employee(name, salary, jobTitle, status = "Full Time") {
    this.name = name;
    this.salary = salary;
    this.jobTitle = jobTitle;
    this.status = status;
}

// Method to print employee information
Employee.prototype.printEmployeeForm = function() {
    console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`);
};

// Step 3: Instantiate three employees
let employee1 = new Employee("Rick", "$5000/month", "Software Engineer");
let employee2 = new Employee("Bob", "$3000/hour", "Scrum Master", "Part Time");
let employee3 = new Employee("Steve", "$4000/month", "Project Manager", "Contract");

// Step 4: Call printEmployeeForm method for each employee
employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();

// Step 5: Add employees to the employees array
employees.push(employee1);
employees.push(employee2);
employees.push(employee3);
