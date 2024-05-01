// db.js
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

let db;

MongoClient.connect(process.env.MONGO_URI, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    db = client.db('Cluster0');
  })
  .catch(error => console.error(error));


