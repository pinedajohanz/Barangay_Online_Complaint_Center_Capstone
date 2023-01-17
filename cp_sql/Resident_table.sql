CREATE TABLE Residents (
	resident_id SERIAL PRIMARY KEY NOT NULL,
	first_name VARCHAR(50) NOT NULL,
	middle_init VARCHAR(2) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	birthday VARCHAR(50) NOT NULL,
	subdivision_address VARCHAR(255) NOT NULL,
	house_street_address VARCHAR(255) NOT NULL,
	contact_number VARCHAR(12) NOT NULL,
	email_address VARCHAR(255) NOT NULL,
	username VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL
);

INSERT INTO Residents (first_name, middle_init, last_name, birthday, subdivision_address, house_street_address, contact_number, email_address, username, password) 
VALUES ('Robert', 'B', 'Pineda', '10/10/66', 'Woodlane Subdivision', 'B9 L1', '9975113834', 'pinedarob@gmail.com', 'rob3', 'robpin345123');

INSERT INTO Residents (first_name, middle_init, last_name, birthday, subdivision_address, house_street_address, contact_number, email_address, username, password) 
VALUES ('Jose', 'A', 'Rizal', '11/11/36', 'Pristine Subdivision', 'B2 L3', '9475413434', 'joserizal@gmail.com', 'jose10', 'joseriz090923');

INSERT INTO Residents (first_name, middle_init, last_name, birthday, subdivision_address, house_street_address, contact_number, email_address, username, password) 
VALUES ('Richard', 'V', 'Laura', '12/12/79', 'Westlake Compound', 'B10 L44', '9925413333', 'RichLaura@gmail.com', 'richlau3', 'laurarich101997');

SELECT * FROM Residents;

-- inner joining residents table and complaints table
--SELECT residents.resident_id, first_name, middle_init, last_name, subdivision_address, house_street_address, complaints_id, message, location_of_complaint, type_of_complaint, date_of_filing, time_of_filing FROM residents INNER JOIN complaints ON residents.resident_id = complaints.complaints_id


-- CREATION OF TABLES IN ORDER IN POSTGRESQL:
-- 1: RESIDENTS TABLE
-- 2: STATUS_INFO TABLE
-- 3: COMPLAINTS TABLE
-- 4: RESPONSE TABLE







-- revised table for stat 0 value
CREATE TABLE Residents (
	resident_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	middle_init VARCHAR(2) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	birthday VARCHAR(50) NOT NULL,
	subdivision_address VARCHAR(255) NOT NULL,
	house_street_address VARCHAR(255) NOT NULL,
	contact_number VARCHAR(12) NOT NULL,
	email_address VARCHAR(255) NOT NULL,
	username VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL,
	stat INT NOT NULL
);

INSERT INTO Residents (first_name, middle_init, last_name, birthday, subdivision_address, house_street_address, contact_number, email_address, username, password, stat) 
VALUES ('Robert', 'B', 'Pineda', '10/10/66', 'Woodlane Subdivision', 'B9 L1', '9975113834', 'pinedarob@gmail.com', 'rob3', 'robpin345123', 0);

INSERT INTO Residents (first_name, middle_init, last_name, birthday, subdivision_address, house_street_address, contact_number, email_address, username, password, stat) 
VALUES ('Jose', 'A', 'Rizal', '11/11/36', 'Pristine Subdivision', 'B2 L3', '9475413434', 'joserizal@gmail.com', 'jose10', 'joseriz090923', 0);

SELECT * FROM Residents;

-- inner joining residents table and complaints table
SELECT residents.resident_id, first_name, middle_init, last_name, subdivision_address, house_street_address, complaints_id, message, location_of_complaint, type_of_complaint, date_of_filing, time_of_filing FROM residents INNER JOIN complaints ON residents.resident_id = complaints.complaints_id