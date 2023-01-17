-- Response by Barangay to the Complaint of a Resident

SELECT Responses.response_id, Complaints.complaints_id, Residents.resident_id, Responses.message_gov, status_info.status_msg 
FROM Responses 
INNER JOIN Complaints 
ON Responses.complaints_id = Complaints.complaints_id 
INNER JOIN status_info 
ON Complaints.complaints_id = status_info.status_info_id
INNER JOIN Residents
ON status_info.status_info_id = Residents.resident_id;







----------------------------------------------------------------------------
SELECT Responses.response_id, Complaints.complaints_id, Residents.resident_id, Responses.message_gov, status_info.status_msg 
FROM Responses 
INNER JOIN Complaints 
ON Responses.response_id = Complaints.complaints_id 
INNER JOIN status_info 
ON Complaints.complaints_id = status_info.status_info_id
INNER JOIN Residents
ON status_info.status_info_id = Residents.resident_id;

-- why nagretrieve lang 1 row which is PK ID 1 rows only?
-- status_info table has a column of status_info_id (NOT SERIAL) which is 0 