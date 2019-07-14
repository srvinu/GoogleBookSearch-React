const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.set("trust proxy", function(ip) {
  if (ip === "127.0.0.1") return true;
  // trusted IPs
  else return false;
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks";
mongoose.connect(
  "mongodb://srvinu:Taanme1983@ds351107.mlab.com:51107/heroku_fzsxsgp3",
  { useNewUrlParser: true }
);
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
//   useNewUrlParser: true
// });
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(process.env.PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
