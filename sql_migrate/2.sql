USE hotel_db;
ALTER TABLE ROOM
ADD COLUMN price INT;

ALTER TABLE ROOM
ADD COLUMN name VARCHAR(64);

ALTER TABLE ROOM
DROP CONSTRAINT ROOM_READ_PERMISSION;

ALTER TABLE ROOM
DROP COLUMN readPermissionId;