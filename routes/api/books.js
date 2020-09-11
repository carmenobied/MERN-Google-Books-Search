const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Search for books via Google Books API
router.route("/api/books/search/")
  .get(BASEURL + query.title);

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;