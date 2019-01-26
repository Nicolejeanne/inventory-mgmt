const db = require("../models");

// Defining methods for the partsController
module.exports = {
// // Find all parts and return them to the user with res.json
// app.get("/api/parts", function (req, res) {
//   db.PartEntry.findAll({}).then(function (dbUser) {
//     res.json(dbParts);
//   });
// });

// // Find one Part with the id in req.params.id and return them to the user with res.json 
// app.get("/api/parts/:id", function (req, res) {
//   db.PartEntry.findOne({
//     where: {
//       id: req.params.id
//     }
//   }).then(function (dbParts) {
//     res.json(dbParts);
//   });
// });

// // Create a part with the data available to us in req.body
// app.post("/api/parts", function (req, res) {
//   console.log(req.body);
//   db.PartEntry.create(req.body).then(function (dbParts) {
//     res.json(dbParts);
//   });
// });
  findAll: function(req, res) {
    db.Parts
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Parts
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Parts
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Parts
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Parts
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
