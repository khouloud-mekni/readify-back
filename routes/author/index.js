const express = require("express");
const router = express.Router();
const auth = require("../../middelwares/verifyToken")
const upload = require("../../middelwares/upload")
router.post("/register",upload.single("photo"), require("./register"));
router.post("/login", require("./login"));
router.put("/verifyEmail", require("./verifyEmail"));
router.post("/addBook", auth , upload.single("photo") ,require("./addBooks"));
router.put("/editBook/:bookId", auth , upload.single("photo") ,require("./editBook"));
router.get("/getAuthor", auth, require("./getAuthor"));
router.delete("/deleteBook/:bookId", auth , require("./deleteBook"))
router.get("/books", auth , require("./getBooks"))
router.get("/myBooks", auth , require("./getOwnBooks"))
router.get("/book/:id", auth , require("./getBook"))
router.get("/reviews/:id", auth , require("./getReviews"))



module.exports = router;