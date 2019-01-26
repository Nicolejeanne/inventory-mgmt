const router = require("express").Router();
const partRoutes = require("./parts");

// Book routes
router.use("/parts", partRoutes);

module.exports = router;
