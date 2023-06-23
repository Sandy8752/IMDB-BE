require('dotenv').config();

const mongoose = require('mongoose');

// const connectionStr = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.9qyrwvy.mongodb.net/`;

//dotenv.config();
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// mongoose.connect(connectionStr, {useNewUrlparser: true})
// .then(() => console.log('connected to mongodb'))
// .catch(err => console.log(err))

// mongoose.connection.on('error', err => {
//   console.log(err)
  
// })