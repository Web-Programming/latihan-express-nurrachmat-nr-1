let mongoose = require("mongoose");
<<<<<<< HEAD
//let dbURI = "mongodb://localhost:27017/pawII-si52"; //Db = pawII-si5c
=======
//let dbURI = "mongodb://localhost:27017/pawII-si5c"; //Db = pawII-si5c
>>>>>>> c6e6c73460d4e10ea665c18d84c9fb8ccaa21578
let dbURI = "mongodb+srv://paw2:si@paw2.iendmj6.mongodb.net/PAWII-SI?retryWrites=true&w=majority&appName=paw2"

mongoose.connect(dbURI, {
    //useNewUrlParser: true
});
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (error) => {
    console.log("Connection Error : " + error);
});
mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
});
