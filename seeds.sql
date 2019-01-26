INSERT INTO partdefinitions (partNumber, partType, partDescription, manufacturer, createdAt, updatedAt)
VALUES ("ERA-3AEB103V","Resistor","RES SMD 10K OHM 0.1% 1/10W 0603", "Panasonic",'1000-01-01 00:00:00', '1000-01-01 00:00:00');
INSERT INTO partdefinitions (partNumber, partType, partDescription, manufacturer, createdAt, updatedAt)
VALUES ("T530D227M010ATE010","Capactitor","CAP TANT POLY 220UF 10V 2917", "KEMET",'1000-01-01 00:00:00', '1000-01-01 00:00:00');
INSERT INTO partdefinitions (partNumber, partType, partDescription, manufacturer, createdAt, updatedAt)
VALUES ("91251A231","Screw","Black-Oxide Alloy Steel Socket Head Screw, 4-40 Thread Size, 3/32inch Long", "McMaster Carr",'1000-01-01 00:00:00', '1000-01-01 00:00:00');

INSERT INTO orders (orderNumber, orderType, project, createdAt, updatedAt)
VALUES ("233609", "Purchase Request", "ANSAS",'1000-01-01 00:00:00', '1000-01-01 00:00:00');
INSERT INTO orders (orderNumber, orderType, project, createdAt, updatedAt)
VALUES ("A45678", "Credit Card", "STEVE", '1000-01-01 00:00:00', '1000-01-01 00:00:00');
INSERT INTO orders (orderNumber, orderType, project, createdAt, updatedAt)
VALUES ("123456", "Purchase Request", "GEOLAX", '1000-01-01 00:00:00', '1000-01-01 00:00:00');

INSERT INTO vendors (vendorName, createdAt, updatedAt)
VALUES ("McMaster Carr",'1000-01-01 00:00:00', '1000-01-01 00:00:00');
INSERT INTO vendors (vendorName, createdAt, updatedAt)
VALUES ("Digikey",'1000-01-01 00:00:00', '1000-01-01 00:00:00');
INSERT INTO vendors (vendorName, createdAt, updatedAt)
VALUES ("Mouser",'1000-01-01 00:00:00', '1000-01-01 00:00:00');

INSERT INTO partentries (quantity, conforming, cabinet, createdAt, updatedAt)
VALUES(100, true, "T636",'1000-01-01 00:00:00', '1000-01-01 00:00:00');
INSERT INTO partentries (quantity, conforming, cabinet, createdAt, updatedAt)
VALUES(500, false, "N500",'1000-01-01 00:00:00', '1000-01-01 00:00:00');
INSERT INTO partentries (quantity, conforming, cabinet, createdAt, updatedAt)
VALUES(1000, true, "181",'1000-01-01 00:00:00', '1000-01-01 00:00:00');