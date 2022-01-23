CREATE TABLE ChargeRecord (
  RecordID         int(10) NOT NULL AUTO_INCREMENT, 
  StationProvider  varchar(20) NOT NULL, 
  StationProvider2 varchar(10) NOT NULL, 
  Date_from        varchar(15) NOT NULL, 
  Date_to          varchar(15) NOT NULL,
  Amount           real NOT NULL, 
  Status           varchar(20) NOT NULL, 
  PRIMARY KEY (RecordID));
CREATE TABLE Operator (
  StationProvider varchar(20) NOT NULL, 
  ProviderAbbr    varchar(2) NOT NULL, 
  PRIMARY KEY (StationProvider));
CREATE TABLE Pass (
  PassID    int(10) NOT NULL AUTO_INCREMENT, 
  Timestamp varchar(15) NOT NULL, 
  StationID varchar(4) NOT NULL, 
  VehicleID varchar(10) NOT NULL, 
  Charge    real NOT NULL, 
  Type      varchar(4) NOT NULL, 
  PRIMARY KEY (PassID));
CREATE TABLE Rate (
  rateID      int(10) NOT NULL AUTO_INCREMENT, 
  StationID   varchar(4) NOT NULL, 
  VehicleType varchar(10) NOT NULL, 
  rate        real NOT NULL, 
  PRIMARY KEY (rateID));
CREATE TABLE Station (
  StationID       varchar(4) NOT NULL, 
  StationProvider varchar(20) NOT NULL, 
  StationName     varchar(20) NOT NULL,
  original        int(1) NOT NULL DEFAULT 0, 
  PRIMARY KEY (StationID));
CREATE TABLE Vehicle (
  VehicleID       varchar(10) NOT NULL, 
  StationProvider varchar(20) NOT NULL, 
  TagID           varchar(10) NOT NULL, 
  Balance         real NOT NULL, 
  LicenseYear     int(4) NOT NULL, 
  ProviderAbbr    varchar(2),
  original        int(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (VehicleID));
CREATE TABLE Admin (
  id int(4) NOT NULL AUTO_INCREMENT,
  username varchar(40) NOT NULL,
  password char(40) NOT NULL,
  PRIMARY KEY (id)
);
ALTER TABLE Rate ADD CONSTRAINT FKRate781582 FOREIGN KEY (StationID) REFERENCES Station (StationID);
ALTER TABLE Pass ADD CONSTRAINT FKPass841181 FOREIGN KEY (StationID) REFERENCES Station (StationID);
ALTER TABLE Station ADD CONSTRAINT FKStation688352 FOREIGN KEY (StationProvider) REFERENCES Operator (StationProvider);
ALTER TABLE Pass ADD CONSTRAINT FKPass868747 FOREIGN KEY (VehicleID) REFERENCES Vehicle (VehicleID);
ALTER TABLE Vehicle ADD CONSTRAINT FKVehicle923856 FOREIGN KEY (StationProvider) REFERENCES Operator (StationProvider);
ALTER TABLE ChargeRecord ADD CONSTRAINT FKChargeReco568927 FOREIGN KEY (StationProvider) REFERENCES Operator (StationProvider);
