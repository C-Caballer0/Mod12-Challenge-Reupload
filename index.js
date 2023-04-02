const inquirer = require("inquirer");
const db = require("./db");
require("console.table");


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

}

function viewRoles(){

}

function viewEmployees(){

}

function newDepartment(){

}

function newRole(){

}

function newEmployee(){

}

function updateEmployee(){
    
}