const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  console.log("Old data deleted");

  // Ensure geometry field always includes `type: "Point"`
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68f9150811b6b0444d6cb6fe",
    geometry: {
      type: "Point",
      coordinates:
        obj.geometry && obj.geometry.coordinates
          ? obj.geometry.coordinates
          : [0, 0], // fallback if missing
    },
  }));

  await Listing.insertMany(initData.data);
  console.log("Data was initialized successfully!");
  mongoose.connection.close();
};

initDB();
