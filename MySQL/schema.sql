DROP DATABASE IF EXISTS employeeTracker_db;
create database employeeTracker_db;

use employeeTracker_db;

create table department (
	id int auto_increment not null,
	deptName varchar(30) not null,
    primary key(id)
);

create table role_in_dept (
	id int auto_increment not null,
    title varchar(30) not null,
    salary decimal null,
    department_id int not null,
    primary key(id)
);

create table employee (
	id int auto_increment not null,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int not null,
    manager_id int null,
    primary key(id)
);

INSERT INTO department (deptName) VALUES ("Community Development");
INSERT INTO department (deptName) VALUES ("Property & Assets");
INSERT INTO department (deptName) VALUES ("Engineering");
INSERT INTO department (deptName) VALUES ("People & Culture");

INSERT INTO role_in_dept (title,salary,department_id) VALUES ("Building Surveyor",90000,1);
INSERT INTO role_in_dept (title,salary,department_id) VALUES ("Planner",90000,1);
INSERT INTO role_in_dept (title,salary,department_id) VALUES ("Administrator",65000,2);
INSERT INTO role_in_dept (title,salary,department_id) VALUES ("Project Manager",125000,2);
INSERT INTO role_in_dept (title,salary,department_id) VALUES ("Structural Engineer",110000,3);
INSERT INTO role_in_dept (title,salary,department_id) VALUES ("Traffic Engineer",100000,3);
INSERT INTO role_in_dept (title,salary,department_id) VALUES ("Talent Recruiter",70000,4);
INSERT INTO role_in_dept (title,salary,department_id) VALUES ("Performance Manager",85000,4);

INSERT INTO employee (first_name,last_name,role_id) VALUES ("Kevin","Bacon",1);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("Marky","Mark",5,1)