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