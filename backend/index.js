// const express = require("express");
// const md5 = require("md5");

// const app = express();

// const { MongoClient, MongoGridFSChunkError } = require("mongodb");
// const { default: mongoose } = require("mongoose");
// const bodyParser = require("body-parser");

// // Create Instance of MongoClient for mongodb
// const client = mongoose.connect(
//   "mongodb+srv://admin:admin@shortly.o2oult0.mongodb.net/?retryWrites=true&w=majority"
// );
// const collection = client.collection("urls");

// // Connect to database
// client
//   .connect()
//   .then(() => {
//     console.log("Connected Successfully!");
//   })
//   .catch((error) => console.log("Failed to connect", error));

// // Create a route for the home page
// app.get("/", (req, res) => {
//   res.send("home route");
// });

// // app.post("/encrypt/", (req, res) => {
// //   var url = req.query.url;
// //   console.log(url);
// //   res.send(md5(url));
// // });

// const urlSchema = new mongoose.Schema({
//   url: String,
//   code: String,
// });
// const Url = mongoose.model("Url", urlSchema);

// app.post("/shorten/", (req, res) => {
//   let url = new Url(req.body);
//   url
//     .save()
//     .then((doc) => {
//       res.send(doc);
//       console.log(doc);
//     })
//     .catch((err) => console.log(err));
// });

// app.post("/decrypt/", (req, res) => {
//   var code = req.query.code;
//   console.log(code);
//   const map = Map();
//   let url = "";
//   if (code in obj) url = obj[code];
//   res.send(url);
// });

// app.get("/urls", (req, res) => {
//   const collections = collection.collections();
//   for (const collectionName of collections) {
//     console.log(collectionName);
//   }
//   res.send(collections);
// });

// // MongoDB
// // Start the server
// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });

const express = require("express");

const app = express();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

app.get("/time", (req, res) => {
  const today = new Date();
  const hours =
    today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
  const minutes =
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
  const seconds =
    today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();
  const time = hours + ":" + minutes + ":" + seconds;
  res.send({ time });
});

// WebSocketServer.on("connection", (socket) => {
//   socket.on("message", (message) => {
//     socket.send(`Roget that ${message}`);
//   });
// });

const port = 3001;
app.listen(port, () => {
  console.log("App started on", port);
});
