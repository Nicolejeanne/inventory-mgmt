const router = require("express").Router();
const partsController = require("../../controllers/partsController");

// Matches with "/api/books"
router.route("/")
  .get(partsController.findAll)
  .post(partsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(partsController.findById)
  .put(partsController.update)
  .delete(partsController.remove);

module.exports = router;
