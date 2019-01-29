const db = require("../models");

// Defining methods for the partsController
module.exports = function(app) {
// Find all parts and return them to the user with res.json
app.get("/api/parts", function (req, res) {
  db.PartEntry.findAll({}).then(function (dbParts) {
    console.log(dbParts);
    res.json(dbParts);
  });
});

// Find one Part with the id in req.params.id and return them to the user with res.json 
app.get("/api/parts/:id", function (req, res) {
  db.PartEntry.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbParts) {
    console.log(dbParts);
    res.json(dbParts);
  });
});

// Create a part with the data available to us in req.body
app.post("/api/parts", function (req, res) {
  console.log(req.body);
  db.PartEntry.create(req.body).then(function (dbParts) {
    console.log(dbParts);
    res.json(dbParts);
  });
});
};
