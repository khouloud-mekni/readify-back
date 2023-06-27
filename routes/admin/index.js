const express = require("express");
const router = express.Router();
const authAdmin = require('../../middelwares/adminVerify')

router.post("/login", require("./login"));
router.put("/banUser/:id", authAdmin, require("./banUser"));
router.put("/banAuthor/:id", authAdmin, require("./banAuthor"));
router.get("/users", authAdmin, require("./getUsers"));
router.get("/authors", authAdmin, require("./getAuthors"));
router.delete("/deletBook/:bookId", authAdmin, require("./deleteBook"));
router.delete("/deletReview/:reviewId", authAdmin, require("./deleteReview"));

module.exports = router;