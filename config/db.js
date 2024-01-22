const { MongoClient } = require('mongodb');
require('dotenv').config()


const uri = process.env.URL;
const client = new MongoClient(uri);

const connectToMongoDB = async ()=> {
   try {
     await client.connect();
     console.log('Connected to MongoDB');
     return client;
   } catch (error) {
     console.error('Error connecting to MongoDB:', error.message);
     throw error; // Re-throw the error to handle it at a higher level if needed
   }
 }

module.exports = { connectToMongoDB };

