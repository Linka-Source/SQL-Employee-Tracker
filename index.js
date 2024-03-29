const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'bootmakerscenedependenciesbrush',
    database: 'employeeTracker_db',
  });

  connection.connect((err) => {
    if (err) throw err;
    prompts();
});

const prompts = () => {
    inquirer
      .prompt({
        name: 'action',
        type: 'rawlist',
        message: 'What would you like to do?',
        choices: [
          'Add new department',
          'Add new role',
          'Add new employee',

          'View all departments',
          'View all roles',
          'View all employees',

          'Update employee role',

          'Delete employee'
        ],
      })
      .then((answer) => {
        switch (answer.action) {
            case 'Add new department':
            addDept();
            break;

            case 'Add new role':
            addRole();
            break;

            case 'Add new employee':
            addEmployee();
            break;

            case 'View all departments':
            viewDepts();
            break;

            case 'View all roles':
            viewRoles();
            break;

            case 'View all employees':
            viewEmployees();
            break;

            case 'Update employee role':
            updateEmployee();
            break;

            case 'Delete employee':
            deleteEmployee();
            break;

            default:
                console.log(`Invalid action: ${answer.action}`);
                break;
            }
          });
    };

const addDept = () => {
    inquirer
    .prompt([
        {
            name: 'deptName',
            type: 'input',
            message: 'Please enter name of new department:',
        }    
    ])
    .then((answer) => {
        const query = `INSERT INTO department (deptName) VALUES ('${answer.deptName}')`;

        connection.query(query,(err,res) => {
            console.log("New department added successfully :)");
            prompts();
        });
    })
}

const addRole = () => {
    inquirer
    .prompt([
        {
            name: 'roleName',
            type: 'input',
            message: 'Please enter new role name:',
        },
        {
            name: 'salary',
            type: 'input',
            message: 'Please enter salary value for this role:',
        },
        {
            name: 'deptID',
            type: 'input',
            message: 'Please enter department ID new role is to be linked to:',
        }
    ])
    .then((answer) => {
        const query = `INSERT INTO role_in_dept (title, salary, department_id) VALUES ('${answer.roleName}', ${answer.salary}, ${answer.deptID})`;

        connection.query(query,(err,res) => {
            console.log("New role added successfully :)");
            prompts();
        });
    })
}

const addEmployee = () => {
    inquirer
    .prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'Please enter employee\'s first name:',
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'Please enter employee\'s last name:',
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'Please enter employee\'s role ID:',
        },
        {
            name: 'manager_id',
            type: 'input',
            message: 'Please enter ID of manager employee reports to:',
        }
    ])
    .then((answer) => {
        const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${answer.firstName}', '${answer.lastName}', ${answer.role_id}, ${answer.manager_id})`;

        connection.query(query,(err,res) => {
            console.log("New employee added successfully :)");
            prompts();
        });
    })
}

const viewDepts = () => {
    const query =
        'SELECT * FROM department';
    connection.query(query, (err, res) => {
        console.table(res);
        prompts();
    });
};

const viewRoles = () => {
    const query =
        'SELECT * FROM role_in_dept';
    connection.query(query, (err, res) => {
        console.table(res);
        prompts();
    });
};

const viewEmployees = () => {
    const query =
        'SELECT * FROM employee';
    connection.query(query, (err, res) => {
        console.table(res);
        prompts();
    });
};

const updateEmployee = () => {
    inquirer
    .prompt([
        {
            name: 'employeeID',
            type: 'input',
            message: 'Please enter ID of employee you\'d like to update:',
        },
        {
            name: 'roleID',
            type: 'input',
            message: 'Please enter employee\'s new role ID:',
        }
    ])
    .then((answer) => {
        const query = `UPDATE employee SET role_id = ${answer.roleID} WHERE id = ${answer.employeeID}`;

        connection.query(query,(err, res) => {
            console.log("Employee successfully updated :)");
            prompts();
        });
    })};

    const deleteEmployee = () => {
        inquirer
        .prompt([
            {
                name: 'employeeID',
                type: 'input',
                message: 'Please enter employee ID you would like to delete:',
            }
        ])
        .then((answer) => {
            const query = `DELETE FROM employee WHERE id = ${answer.employeeID}`;

            connection.query(query,(err, res) => {
                console.log("Employee was successfully deleted :)");
                prompts();
            });
        })};
