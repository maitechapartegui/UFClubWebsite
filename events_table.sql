CREATE TABLE events (
	eventName VARCHAR(50),
    month INT NOT NULL,
    day INT NOT NULL,
    year INT NOT NULL,
    location varchar(50),
    person_of_contact VARCHAR(50),
    start_time TIME,
    end_time TIME,
    points_awarded INT NOT NULL,
    PRIMARY KEY (event_name)
);


INSERT INTO events (eventName, month, day, year, location, person_of_contact, start_time, end_time, points_awarded)
VALUES
('GBM #1', 12, 14, 2024, 'Little Hall', 'Alexis', 13, 15, 2);

SELECT * FROM EVENTS; -- Displays table contents