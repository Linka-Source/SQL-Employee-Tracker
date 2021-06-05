const mysql = require('mysql');
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

            case 'Delete an employee':
            deleteEmployee();
            break;

            default:
                console.log(`Invalid action: ${answer.action}`);
                break;
            }
          });
    };

          

          
  
