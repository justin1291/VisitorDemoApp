CREATE TABLE Visitors (
    ID int IDENTITY(1,1),
    IP_Address VARCHAR(36),
    COUNTRY_NAME VARCHAR(41), -- based on the longest possible name according to google.
    REGION_NAME VARCHAR(41),
    CITY VARCHAR (41),
    LATITUDE DECIMAL (9,6),
    LONGITUDE DECIMAL (9,6)
)