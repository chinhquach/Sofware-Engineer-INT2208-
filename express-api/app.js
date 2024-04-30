// app.js
const express = require('express');
const app = express();
const { db } = require('./db.js');
const { extractVocabulary } = require('./vocabulary.js');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.json());

app.post('/extract', async (request, response) => {
  try {
    const text = request.body.text;
    const vocabulary = extractVocabulary(text);
    await db.collection('vocabulary').insertOne({text, vocabulary});
    response.redirect('/');
  } catch (error) {
    console.error(error);
    response.status(500).send('Server Error');
  }
});

app.get('/', async (request, response) => {
  try {
    const results = await db.collection('vocabulary').find().toArray();
    response.render('index.ejs', {vocabularies: results});
  } catch (error) {
    console.error(error);
    response.status(500).send('Server Error');
  }
});

app.listen(process.env.PORT || 2121, () => {
  console.log(`Server running on port ${process.env.PORT || 2121}`);
});