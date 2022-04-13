const mongoose = require("mongoose");

require("dotenv").config();
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => { 
    console.log("Successfully connected to MongoDB using Mongoose!");
})

const port = 3000, 
    controller = require("./controllers/controller")
    express = require("express")
    app = express();
app.set("view engine", "ejs");
app.get("/home", controller.sendReqParam)
app.get("/lab10", controller.sendcss)
app.get("/books/:page", controller.sendbook)
.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`)

})

