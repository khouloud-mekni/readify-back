const express = require("express");
const router = express.Router();
const auth = require("../../middelwares/verifyToken")
const upload = require("../../middelwares/upload");
router.post("/register", require("./register") );
router.post("/login", require("./login") );
router.put("/verifyEmail", require("./verifyEmail") );
router.get("/books", auth , require("./getBooks"));
router.put("/addPhoto", auth, upload.single("userPhoto"), require("./addPhoto"));
router.get("/book/:id", auth, require("./getBook"));
router.get("/getUser", auth, require("./getUser"));
router.post("/addReview/:bookId", auth, require("./addReview"));
router.put("/updateReview/:reviewId", auth, require("./updateReview"));
router.delete("/deleteReview/:reviewId", auth, require("./deleteReview"));
router.get("/reviews/:id", auth, require("./getReviews"));
module.exports = router;


// const express = require("express");
// const router = express.Router();
// const auth = require("../../middlewares/verifyToken");
// const upload = require("../../middlewares/upload");
// router.post("/register", require("./register"));
// router.post("/login", require("./login"));
// router.put("/verifyEmail", require("./verifyEmail"));
// router.get("/books", auth, require("./getBooks"));
// router.put("/addPhoto", auth, upload.single("userPhoto"), require("./addPhoto"));
// router.get("/book/:id", auth, require("./getBook"));
// router.get("/getUser", auth, require("./getUser"));
// router.post("/addReview/:bookId", auth, require("./addReview"));
// router.put("/updateReview/:reviewId", auth, require("./updateReview"));
// router.delete("/deleteReview/:reviewId", auth, require("./deleteReview"));
// router.get("/reviews/:id", auth, require("./getReviews"));

// module.exports = router;


