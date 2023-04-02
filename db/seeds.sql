use employee_db;

INSERT INTO dept
    (name)
VALUES
    ('HR'),
    ('Executive'),
    ('Accounting'),
    ('Programming'),
    ('Temp');

INSERT INTO role
    (JobTitle, salary, dept_id)
VALUES
    ('CEO', 100000, 2),
    ('HR Manager', 50000, 1),
    ('Programmer', 60000, 4),
    ('Accountant', 75000, 3),
    ('Intern', 25000, 5);

INSERT INTO employee
    (firstName, lastName, role_id)
VALUES
    ('Joe', 'Smith', 4),
    ('Sue', 'Smith', 1),
    ('Joanne', 'OConner', 3),
    ('Wayne', 'Gretzky', 2),
    ('Lucy', 'Anne', 5);
    