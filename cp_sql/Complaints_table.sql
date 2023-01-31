-- COMPLAINTS (TO BRGY) TABLE with 2 foreign keys
CREATE TABLE Complaints (
  complaints_id SERIAL PRIMARY KEY NOT NULL,
  message_comp VARCHAR(255) NOT NULL,
  location_of_complaint VARCHAR(255) NOT NULL,
  type_of_complaint VARCHAR(255) NOT NULL,
  date_of_filing DATE NOT NULL, -- DD/MM/YYYY
  time_of_filing TIME NOT NULL, -- 14:00
  resident_id INT REFERENCES Residents(resident_id), --FK
  status_info_id INT REFERENCES status_info(status_info_id) --FK
);

-- Suggestion ni Sir Jive
-- UPON CREATION OF COMPLAINT DAPAT MAY STATUS NA (IN PROGRESS) SIYA.
-- EVERY TIME MAY REPLY SI BRGY DAPAT (IN PROGRESS) STATUS NIYA. The brgy will change the status if completed na

INSERT INTO Complaints (message_comp, location_of_complaint, type_of_complaint, date_of_filing, time_of_filing, resident_id, status_info_id ) VALUES ('I would like to file a complaint regarding a Road issue in our Subdivision', 'Revilla Compound', 'Road issue', '10/10/23', '11:00', 1, 0);
INSERT INTO Complaints (message_comp, location_of_complaint, type_of_complaint, date_of_filing, time_of_filing, resident_id, status_info_id ) VALUES ('I would like to file a complaint regarding a Drainage issue in our Subdivision', 'Pineda Compound', 'Drainage issue', '10/11/23', '10:00', 2, 0);
INSERT INTO Complaints (message_comp, location_of_complaint, type_of_complaint, date_of_filing, time_of_filing, resident_id, status_info_id ) VALUES ('I would like to file a complaint regarding a Road issue in our compound', 'Westlake Compound', 'Road issue', '11/11/23', '13:00', 3, 0);

SELECT * FROM Complaints;