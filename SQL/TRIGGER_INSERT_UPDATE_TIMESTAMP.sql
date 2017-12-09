IF EXISTS (SELECT * FROM sysobjects WHERE TYPE = 'TR'
     AND NAME = 'VISITOR_IF_EXISTS_UPDATE_TIME')
     DROP TRIGGER VISITOR_IF_EXISTS_UPDATE_TIME
GO
CREATE TRIGGER VISITOR_IF_EXISTS_UPDATE_TIME
   ON Visitor
   INSTEAD OF INSERT
AS 
BEGIN
SET NOCOUNT ON
IF NOT EXISTS (SELECT V.IP_ADDRESS from Visitor V, INSERTED I
 WHERE V.IP_ADDRESS = I.IP_ADDRESS)
    INSERT INTO VISITOR (IP_ADDRESS, COUNTRY_NAME, REGION_NAME, CITY, LATITUDE, LONGITUDE)
SELECT IP_ADDRESS, COUNTRY_NAME, REGION_NAME, CITY, LATITUDE, LONGITUDE
 FROM INSERTED
ELSE
UPDATE Visitor
    SET Visitor.UPDATE_DATE = (SYSDATETIME()),
    Visitor.UPDATE_COUNT = V.UPDATE_COUNT + 1
  FROM Visitor V, INSERTED I
WHERE V.IP_ADDRESS = I.IP_ADDRESS
END

