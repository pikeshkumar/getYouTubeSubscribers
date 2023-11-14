const express = require("express");
const app = express();
const SubsRoute = require("./api/subscribers.js");
app.use("/api", SubsRoute);

// const { MongoClient } = require("mongodb");

// // Connection URI
// const uri = "mongodb://0.0.0.0:27017/"; // Replace with your MongoDB URI

// // Database Name
// const dbName = "Youtube"; // Replace with your database name

// // Create a new MongoClient
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Function to fetch data
// async function fetchData() {
//   try {
//     // Connect to the MongoDB server
//     await client.connect();
//     console.log("Connected to the database");

//     // Select the database
//     const db = client.db("Youtube");

//     // Select the collection
//     const collection = db.collection("Subscribers"); // Replace with your collection name

//     // Fetch data
//     const data = await collection.find({}).toArray();
//     console.log("Fetched data:", data);
//   } catch (err) {
//     console.log("Error:", err);
//   } finally {
//     // Close the connection
//     await client.close();
//     console.log("Connection closed");
//   }
// }

// Call the function
app.use((req, res, next) => {
  res.status(404).json({
    error: "Bad request",
  });
});

module.exports = app;
