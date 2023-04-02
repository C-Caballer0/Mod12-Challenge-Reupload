const connection = require("./connection");

class database {

    constructor(connection) {
        this.connection =  connection;
    }


viewDepartments() {
    return this.connection.promise().query(
        "SELECT dept.id, dept.name FROM dept;"
    );
}

viewEmployees(){
    return this.connection.promise().query(
        "SELECT employee.id, employee.firstName, employee.lastName, employee.salary FROM employee; "
    );
}

viewRoles(){
    return this.connection.promise().query(
        "SELECT role.id, role.jobTitle, role.salary FROM role;"
    );
}

newDepartment(department){
    return this.connection.promise().query(
        "INSERT INTO dept SET ?", department
    );
}

newRole(role){
    return this.connection.promise().query(
        "INSERT INTO role SET ?", role
    );
}

newEmployee(employee){
    return this.connection.promise().query(
        "INSERT INTO employee SET ?", employee
    );
}

updateEmployee(employeeID,roleID){
    return this.connection.promise().query(
        "UPDATE employee SET role_id = ? WHERE id = ?", [roleID, employeeID]
    );
  }
}

module.exports = new database(connection);