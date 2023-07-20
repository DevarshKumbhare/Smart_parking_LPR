CREATE TABLE main_database(
    carid BIGSERIAL NOT NULL PRIMARY KEY,
    entry_time TIMESTAMP NOT NULL,
    exit_time TIMESTAMP,
    License_plate VARCHAR(15) NOT NULL,
    Parking_spot VARCHAR(10) NOT NULL,
    Status BOOL NOT NULL);