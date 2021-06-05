DROP DATABASE IF EXISTS employeeTracker_db;
create database employeeTracker_db;

use employeeTracker_db;

create table employee (
	id int auto_increment not null,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int not null,
    manager_id int null,
    primary key(id)
);