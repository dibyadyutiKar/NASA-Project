const mongoose = require('mongoose');

require('dotenv').config();

exports.mongoConnect = async () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`DB connected successfully`);
    })
    .catch((err) => {
      console.log('Db connection issue');
      console.error(err);
      process.exit(1);
    });
};

exports.mongoDisconnect = async () => {
  try {
    await mongoose.disconnect();
    console.log('MongoDB Disconnected');
  } catch (error) {
    console.error('MongoDB Disconnection Error:', error);
  }
};
