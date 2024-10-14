if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate"); 
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const Listing = require("./models/Schema.js");
const sampleData = require("./init/data.js");
const indiaData = require("./init/indiaData.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/dheavens";

main()
.then( ()=> {
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


const sessionOptions = {
    secret:"mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOmly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());  
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res , next) =>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
}); 

app.get("/", (req, res)=>{
    res.render('./listings/home.ejs');
});  



//toggle feature
let currentDataset = 'international'; // Keep track of which dataset is currently active

app.get('/', (req, res) => {
    const currentDataset = 'international'; // or 'international', set the appropriate value based on your logic
    res.render('layouts/boilerplate', { currentDataset });
  });
// Update the existing /listings route
app.get("/listings", async (req, res) => {
    try {
        let listings;
        if (currentDataset === 'international') {
            listings = await Listing.find({ dataset: 'international' });
        } else {
            listings = await Listing.find({ dataset: 'india' });
        }
        res.render("listings/index", { allListings: listings, currentDataset });
    } catch (err) {
        console.error(err);
        req.flash("error", "Error fetching listings");
        res.redirect("/");
    }
});

// Add the new toggle route
app.post("/toggle-dataset", (req, res) => {
    currentDataset = currentDataset === 'international' ? 'india' : 'international';
    res.redirect("/listings");
});



app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// Add this function to initialize both datasets
const initializeDatasets = async () => {
    await Listing.deleteMany({});
    sampleData.data = sampleData.data.map((obj) => ({...obj, owner:"66d1f478576e84681ee50b82"}));
    indiaData.data = indiaData.data.map((obj) => ({...obj, owner:"66d1f478576e84681ee50b82"}));
    const sampleWithDataset = sampleData.data.map(listing => ({...listing, dataset: 'international'}));
    const indiaWithDataset = indiaData.data.map(listing => ({...listing, dataset: 'india'}));
    await Listing.insertMany([...sampleWithDataset, ...indiaWithDataset]);
    console.log("Both datasets initialized");
};

// Uncomment the next line when you're ready to initialize the data
// initializeDatasets();

app.listen(8080, ()=>{
    console.log("server is listening to port 8080");
});