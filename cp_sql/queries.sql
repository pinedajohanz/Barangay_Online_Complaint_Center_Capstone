-- SELECTING COMPLAINTS THAT ARE IN PROGRESS OR COMPLETED STATUS
-- working query

SELECT * FROM complaints
INNER JOIN residents
ON residents.resident_id = complaints.resident_id
INNER JOIN status_info
ON complaints.status_info_id = status_info.status_info_id
WHERE complaints.status_info_id = 0; -- = $1 (this is a parameter/variable)

-- DISPLAY OWN COMPLAINT WITH RESPONSE AND STATUS FROM THE BARANGAY (PRIORITY USER SIDE) [SEE MY COMPLAINT SECTION]

SELECT 
complaints.resident_id, complaints.complaints_id, complaints.message_comp, status_info.status_msg, complaints.status_info_id, responses.message_gov, responses.date_res 
FROM status_info 
INNER JOIN complaints
ON status_info.status_info_id = complaints.status_info_id
INNER JOIN responses
ON complaints.complaints_id = responses.complaints_id 
WHERE complaints.resident_id = 19; --$1

-- Update status_info_id to 0 or 1 integer
UPDATE Complaints
SET status_info_id = 1 -- $1
WHERE complaints_id = 3; -- $2

-- next step is to (SELECT) display the response of the brgy to a complaint that can update the status of a complaint

-- Response from Barangay to a specific complaint and has an option to Update the status (0 or 1) of the complaint
INSERT INTO Responses (message_gov, complaints_id) VALUES ('Your Complaint (Road Issue_01) has been received. We will contact you at a later time for the progress of your complaint.', 1);
UPDATE Complaints
SET status_info_id = 1
WHERE complaints_id = 3;

-- Barangay can delete a complaint if it has been completed
DELETE FROM Complaints 
WHERE status_info_id = 1;