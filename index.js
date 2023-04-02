const inquirer = require("inquirer");
const database = require("./db");
require("console.table");

mainMenu();

function mainMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "Choose an option:",
            choices: [
                {
                    name: "View departments.",
                    value: "DEPARTMENTS"
                },
                {
                    name: "View roles.",
                    value: "ROLES"
                },
                {
                    name: "View employees.",
                    value: "EMPLOYEES"
                },
                {
                    name: "Add a new department.",
                    value: "NEW_DEPT"
                },
                {
                    name: "Add a new role.",
                    value: "NEW_ROLE"
                },
                {
                    name: "Add new employee",
                    value: "NEW_EMPLOYEE"
                },
                {
                    name: "Update Employees",
                    value: "NEW_EMPLOYEE_ROLE"
                },
                {
                    name: "Exit",
                    value: "EXIT"
                }
            ]
        }
    ]).then(res => {
        let option = res.options;

        switch (option) {
            case "DEPARTMENTS":
            viewDepartments();
            break;
            case "ROLES":
            viewRoles()
            break;
            case "EMPLOYEES":
            viewEmployees();
            break;
            case "NEW_DEPT":
            newDepartment();
            break;
            case "NEW_ROLE":
            newRole();
            break;
            case "NEW EMPLOYEE":
            newEmployee();
            break;
            case "NEW_EMPLOYEE_ROLE":
            updateEmployee();
            break;
            case "EXIT":
                process.exit();
        }
    })
}

function viewDepartments(){
    database.viewDepartments()
    .then(([rows]) => {
        let departments = rows;
        console.table(departments);
    }).then(() => mainMenu());
}

function viewRoles(){
    database.viewRoles()
    .then(([rows]) => {
        let roles = rows;
        console.table(roles);
    }).then(() => mainMenu());
}

function viewEmployees(){
    database.viewEmployees()
    .then(([rows]) => {
        console.table(rows);
    }).then(() => mainMenu());
}

function newDepartment(){

}

function newRole(){

}

function newEmployee(){

}

function updateEmployee(){

}