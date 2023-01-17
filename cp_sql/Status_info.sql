CREATE TABLE status_info (
	status_info_id INT PRIMARY KEY NOT NULL,
	status_msg VARCHAR(20)
);

INSERT INTO status_info (status_info_id, status_msg) VALUES (0, 'IN PROGRESS'); 
INSERT INTO status_info (status_info_id, status_msg) VALUES (1, 'COMPLETED'); 

SELECT * FROM status_info;




-- CREATE TABLE status_new (
-- 	status_new_id SERIAL PRIMARY KEY,
-- 	resident_id INT REFERENCES Residents(resident_id), --FK
--   	status_info_id INT REFERENCES status_info(status_info_id) --FK
-- )



-- CREATE TABLE status_info (
-- 	status_info_id SERIAL PRIMARY KEY,
-- 	status_msg VARCHAR(20),
-- );

-- INSERT INTO status_info (status_msg) VALUES ('IN PROGRESS'); --1
-- INSERT INTO status_info (status_msg) VALUES ('COMPLETED'); --2

-- SELECT * FROM status_info;