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
            //View departments function
            break;
            case "ROLES":
            //View roles function
            break;
            case "EMPLOYEES":
            //View employees function
            break;
            case "NEW_DEPT":
            //Create new department function
            break;
            case "NEW_ROLE":
            //Create new role function
            break;
            case "NEW EMPLOYEE":
            //Create new employee function
            break;
            case "NEW_EMPLOYEE_ROLE":
            //Update employee role function
            break;
            case "EXIT":
                process.exit();
        }
    })
}

