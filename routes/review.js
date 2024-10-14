const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../models/Schema.js");
const Listing = require("../models/Schema.js");
const Review = require("../models/review.js");
const { isLoggedIn, isOwner, isReviewAuthor } = require("../middleware.js");

const reviewController = require("../controllers/reviewsc.js");

//Reviews
 //Post Review Route
 router.post("/", isLoggedIn ,
   wrapAsync(reviewController.createReview)
 );
 
  //Delete Review Route
  router.delete("/:reviewId", isLoggedIn, isReviewAuthor,isOwner, wrapAsync(reviewController.deleteReview)
 );

module.exports = router; 