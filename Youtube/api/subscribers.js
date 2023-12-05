const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb+srv://Kumarpikesh52:Pikesh123@cluster0.wdnhuwd.mongodb.net/";

// Database Name
const dbName = "Youtube"; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to fetch data
async function fetchDataByName() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log("Connected to the database");

    // Select the database
    const db = client.db("Youtube");

    // Select the collection
    const collection = db.collection("Subscribers"); // Replace with your collection name

    // Fetch data
    const data = await collection
      .find({}, { projection: { _id: 0 } })
      .toArray();
    console.log("Fetched data:", data);
    return data;
  } catch (err) {
    console.log("Error:", err);
  } finally {
    // Close the connection
    //await client.close();
    console.log("Connection closed");
  }
}
async function fetchData() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log("Connected to the database");

    // Select the database
    const db = client.db("Youtube");

    // Select the collection
    const collection = db.collection("Subscribers"); // Replace with your collection name

    // Fetch data
    const data = await collection.find({}).toArray();
    //console.log("Fetched data:", data);
    return data;
  } catch (err) {
    console.log("Error:", err);
  } finally {
    // Close the connection
    //await client.close();
    console.log("Connection closed");
  }
}
async function fetchbyId(id) {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log("Connected to the database");

    // Select the database
    const db = client.db("Youtube");

    // Select the collection
    const collection = db.collection("Subscribers"); // Replace with your collection name

    // Fetch data
    var mongo = require("mongodb");
    var abcd = new mongo.ObjectId(id);
    const data = await collection.find({ _id: abcd }).toArray();
    //console.log("Fetched data:", id);
    return data;
  } catch (err) {
    console.log("Error:", err);
  } finally {
    // Close the connection
    //await client.close();
    console.log("Connection closed");
  }
}

router.get("/subscribers/name", (req, res, next) => {
  fetchDataByName().then((result) => {
    //var json = JSON.parse(result);
    res.status(200).json({
      //Subscribers: result.map((element) => {
      //return [element.name, element.subscribedChannel];
      Susbscribers: result,
      // var name = element.name;
      // var subs = element.subscribedChannel;
      // console.log("test name-" + name);
      // console.log("test sub-" + subs);
      //console.log("terst " + element.name);
      //
      //}),
    });
  });
});
router.get("/subscribers", (req, res, next) => {
  fetchData().then((result) => {
    res.status(200).json({
      Susbscribers: result,
    });
  });
});
router.get("/subscribers/:id", (req, res, next) => {
  fetchbyId(req.params.id).then((result) => {
    if (result != null) {
      res.status(200).json({
        Susbscribers: result,
      });
    } else {
      res.status(404).json({
        Message: "User Not Found",
      });
    }
  });
});

module.exports = router;
