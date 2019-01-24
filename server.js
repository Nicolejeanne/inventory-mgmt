// Sets up the Express App, react router
const express = require("express");
const routes = require("./routes");
const mysql = require("mysql");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Make connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  username:'root,',
  port: 3306,
  password: 'password',
  database: 'parts'
});
connection.connect(function(err){
  (err)? console.log(err): console.log(connection);
});

// Add routes, both API and view
app.use(routes);

// Requiring our models for syncing
var db = require("./models");

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
app.listen(PORT, function() {
  console.log(`EAD Inventory Management now listening on PORT ${PORT}!`);
});
});
