INSERT INTO partDefinition (partNumber, partType, partDescription, manufacturer)
VALUES ("ERA-3AEB103V","Resistor","RES SMD 10K OHM 0.1% 1/10W 0603", "Panasonic");
INSERT INTO partDefinition (partNumber, partType, partDescription, manufacturer)
VALUES ("T530D227M010ATE010","Capactitor","CAP TANT POLY 220UF 10V 2917", "KEMET");
INSERT INTO partDefinition (partNumber, partType, partDescription, manufacturer)
VALUES ("91251A231","Screw","Black-Oxide Alloy Steel Socket Head Screw, 4-40 Thread Size, 3/32inch Long", "McMaster Carr");

INSERT INTO order (orderNumber, orderType, project)
VALUES ("233609", "Purchase Request", "ANSAS");
INSERT INTO order (orderNumber, orderType, project)
VALUES ("A45678", "Credit Card", "STEVE");
INSERT INTO order (orderNumber, orderType, project)
VALUES ("123456", "Purchase Request", "GEOLAX");

INSERT INTO vendors (vendorName)
VALUES ("McMaster Carr");
INSERT INTO vendors (vendorName)
VALUES ("Digikey");
INSERT INTO vendors (vendorName)
VALUES ("Mouser");

INSERT INTO partEntry (quantity, conforming, cabinet)
VALUES(100, true, "T636");
INSERT INTO partEntry (quantity, conforming, cabinet)
VALUES(500, true, "N500");
INSERT INTO partEntry (quantity, conforming, cabinet)
VALUES(1000, true, "181");