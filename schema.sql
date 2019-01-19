CREATE DATABASE partsInventory_db;

USE partsInventory_db;

CREATE TABLE partDefinition (
    part_id INT NOT NULL AUTO_INCREMENT,
    partNumber VARCHAR(100) NOT NULL,
    partRevision VARCHAR(5),
    partType VARCHAR(50) NOT NULL,
    partDescription TEXT NOT NULL,
    manufacturer VARCHAR(100) NOT NULL,
    unitType varchar(10) NOT NULL, 
    PRIMARY KEY (part_id)
);

-- CREATE TABLE vendors (
--     vendor_id INT NOT NULL AUTO_INCREMENT,
--     vendorName VARCHAR(255) NOT NULL,
--     PRIMARY KEY (vendor_id)
-- );

CREATE TABLE partEntry (
    partEntry_id INT NOT NULL AUTO_INCREMENT,
    orderType VARCHAR(100) NOT NULL,
    orderNumber VARCHAR(50) NOT NULL,
    vendor VARCHAR(255) NOT NULL,
    -- FOREIGN KEY fk_vendor(vendor_id),
    -- REFERENCES vendors(vendor_id),
    project VARCHAR(50) NOT NULL,
    -- partNumberEntry VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    conforming boolean NOT NULL,
    room VARCHAR(20) NOT NULL,
    cabinet VARCHAR(20) NOT NULL,
    bin VARCHAR(20) NOT NULL,
    package INT NOT NULL AUTO_INCREMENT,
    added DATE NOT NULL,
    addedBy VARCHAR NOT NULL,
    FOREIGN KEY fk_part(part_id),
    REFERENCES partDefinition(part_id),
    PRIMARY KEY (partEntry_id)
);
-- erd