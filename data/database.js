const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let database;

const initDB = (callback) => {
  if (database) {
    console.log('Database is already initialized');
    return callback(null, databse);
  }
  MongoClient.connect(process.env.MONGODB_URL)
    .then((client) => {
      database = client;
      callback(null, database);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDatabase = () => {
  if (!database) {
    throw Error('Database is not initialized');
  }
  return database;
};

module.exports = {
  initDB,
  getDatabase
};