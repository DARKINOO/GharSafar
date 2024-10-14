const mongoose = require("mongoose");
const Listing = require("../models/Schema.js");
const initData = require("../init/data.js");
const indiaData = require("../init/indiaData.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/dheavens";

// main()
// .then( ()=> {
//     console.log("connected to DB");
// })
// .catch((err)=>{
//     console.log(err);
// })

async function main() {
    await mongoose.connect(MONGO_URL);
}

// const initDB = async() => {
//     await Listing.deleteMany({});
//     initData.data = initData.data.map((obj) => ({...obj, owner:"66d1f478576e84681ee50b82"}));
//     await Listing.insertMany(initData.data);
//     console.log("Data was initialized");
// };

// initDB();

