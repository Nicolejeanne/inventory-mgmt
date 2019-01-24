CREATE DATABASE parts;

USE parts;

-- CREATE TABLE partDefinition (
--     id INT NOT NULL AUTO_INCREMENT,
--     partNumber VARCHAR(100) NOT NULL,
--     partType VARCHAR(50) NOT NULL,
--     partDescription TEXT NOT NULL,
--     manufacturer VARCHAR(100) NOT NULL, 
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE vendors (
--     id INT NOT NULL AUTO_INCREMENT,
--     vendorName VARCHAR(100) NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE partEntry (
--     id INT NOT NULL AUTO_INCREMENT,
--     part id fk from part description,
--     quantity INT NOT NULL,
--     conforming boolean NOT NULL,
--     cabinet VARCHAR(20) NOT NULL,
--     order id fk for the order because there are other part entries on this order
--     -- FOREIGN KEY fk_part(part_id),
--     -- REFERENCES partDefinition(part_id),
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE order (
--     id INT NOT NULL AUTO_INCREMENT,
--     orderType VARCHAR(100) NOT NULL,
--     orderNumber VARCHAR(50) NOT NULL,
--     project VARCHAR(50) NOT NULL,
--     -- vendor fk_vendor id from vendor table,
--     -- FOREIGN KEY fk_vendor(vendor_id),
--     -- REFERENCES vendors(vendor_id),
--     -- part entries join part entry where ordr id = this id
-- )