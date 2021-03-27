const mongoose = require("mongoose"),
    db = "Pets";


    mongoose.connect(`mongodb://localhost/${db}`, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
        .then(() => console.log("Do or do not, there is no try"))
        .catch(err => console.log("That's no itttttttttt"))

