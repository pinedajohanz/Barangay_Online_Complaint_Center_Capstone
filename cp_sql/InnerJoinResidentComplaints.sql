-- Display Residents Personal info with their complaints
-- inner joining residents table and complaints table
SELECT residents.resident_id, first_name, middle_init, last_name, subdivision_address, house_street_address, complaints_id, message_comp, location_of_complaint, type_of_complaint, date_of_filing, time_of_filing 
FROM residents 
INNER JOIN complaints 
ON residents.resident_id = complaints.complaints_id;