const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner} = require("../middleware.js");
const multer  = require('multer')
const {storage} = require('../cloudConfig.js');
const upload = multer({ storage });
const listingController = require("../controllers/lisitingc.js");
const Listing = require("../models/Schema");

router
 .route("/")
 .get(wrapAsync(listingController.index))
 .post( 
    isLoggedIn,
    upload.single("listing[image]"), 
    wrapAsync(listingController.createListing)
 );


//New Route
router.get("/new",isLoggedIn,
    listingController.renderNewForm
);

//Serach Route
router.get("/search", wrapAsync(listingController.searchListings));

router.route("/:id")
.get(
    wrapAsync(listingController.showListing)
)
.put( isLoggedIn, isOwner, upload.single("listing[image]"), 
    wrapAsync(listingController.updateListing)
)
.delete(isLoggedIn,
    wrapAsync(listingController.deleteListing)
);

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner,
    wrapAsync(listingController.editListing)
);


module.exports = router;  