//for connecting it to the database 
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Disha:Disha123@cluster0.hmlogwa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const connectToMongo = () => {
    
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI)
    .then( ()=> {
        console.log("connected");
    })

}

module.exports = connectToMongo;