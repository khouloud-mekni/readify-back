const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find().populate("author" , "-_id -email -password -isAuthor -isBanned -isVerified -createdAt -updatedAt");
    res.status(200).json({
      status: true,
      data: books,
    });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ status: false, error });
  }
});

module.exports = router;