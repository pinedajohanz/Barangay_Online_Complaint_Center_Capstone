-- RESPONSE MESSAGES TABLE (TO RESIDENTS) with 1 foreign key
CREATE TABLE Responses (
  response_id SERIAL PRIMARY KEY NOT NULL,
  message_gov VARCHAR(255) NOT NULL,
  complaints_id INT REFERENCES Complaints(complaints_id) --FK
-- UPON CREATION OF COMPLAINT DAPAT MAY STATUS (IN PROGRESS) SIYA.
-- EVERY TIME MAY REPLY SI BRGY DAPAT (IN PROGRESS) STATUS NIYA
);

INSERT INTO Responses (message_gov, complaints_id) VALUES ('Your Complaint (Road Issue_01) has been received. We will contact you at a later time for the progress of your complaint.', 1);
INSERT INTO Responses (message_gov, complaints_id) VALUES ('Your Complaint (Drainage Issue) has been received. We will contact you at a later time for the progress of your complaint.', 2);
INSERT INTO Responses (message_gov, complaints_id) VALUES ('Your Complaint (Road Issue_02) has been received. We will contact you at a later time for the progress of your complaint.', 3);

SELECT * FROM Responses;







-- INNER JOIN Response_messages table and Complaints Table
SELECT response_id, Complaints.complaints_id, message_gov FROM Responses INNER JOIN Complaints ON Responses.response_id = Complaints.complaints_id;






-- RESPONSE MESSAGES TABLE (TO RESIDENTS) with 3 foreign keys 
-- PK ID IS MANUAL GENERATED
CREATE TABLE Responses (
  response_id INT NOT NULL,
  message_gov VARCHAR(255) NOT NULL,
  complaints_id INT REFERENCES Complaints(complaints_id),
-- UPON CREATION OF COMPLAINT DAPAT MAY STATUS (IN PROGRESS) SIYA.
-- EVERY TIME MAY REPLY SI BRGY DAPAT (IN PROGRESS) STATUS NIYA
  -- barangay_id INT REFERENCES Barangay(barangay_id),
  -- status_id INT REFERENCES Status(status_id)
);

INSERT INTO Responses (response_id, message_gov) VALUES (0, 'Your Complaint has been received. We will contact you at a later time for the progress of your complaint.');
INSERT INTO Responses (response_id, message_gov) VALUES (1, 'Your Complaint (Drainage Issue) has been received. We will contact you at a later time for the progress of your complaint.');

SELECT * FROM Responses;