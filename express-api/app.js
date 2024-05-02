require('dotenv').config();
const express = require('express');
const request = require('request');
const axios = require('axios');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lamhanmoc111:' + 'Chinh27102004' + '@cluster0.vdxenfl.mongodb.net/') .then(() => console.log('Kết nối với MongoDB thành công!')) .catch(err => console.error('Không thể kết nối với MongoDB...', err));
const wordSchema = new mongoose.Schema({
    word: String,
    definition: String
});

const Word = mongoose.model('Word', wordSchema);

const app = express();
app.use(cors());
app.use(express.json());

app.post('/words', async (req, res) => {
  const newWord = new Word(req.body);
  const savedWord = await newWord.save();
  res.json(savedWord);
});

app.get('/words', async (req, res) => {
  const words = await Word.find();
  res.json({ words: words });
});

// Hàm để lấy định nghĩa của một từ và lưu nó vào cơ sở dữ liệu
function getDefinition(word, callback) {
  request.get({
    url: 'https://api.api-ninjas.com/v1/dictionary?word=' + word,
    headers: {
      'X-Api-Key': 'Hskp4lEN1CKGEYF6HlonPLJSXu7siBpxm13l74iC'
    },
  }, async function(error, response, body) {
    if(error) return callback(error);
    else if(response.statusCode != 200) return callback(new Error('Error: ' + response.statusCode));
    else {
      // Lưu từ và định nghĩa vào cơ sở dữ liệu
      const newWord = new Word({ word: word, definition: body });
      const savedWord = await newWord.save();
      callback(null, savedWord);
    }
  });
}

// Lấy định nghĩa cho một từ
var word = 'hello';
getDefinition(word, function(error, definition) {
  if(error) console.error('Failed to get definition for word ' + word + ':', error);
  else console.log({ word: word, definition: definition });
});

app.get('/word/:word', async (req, res) => {
  const wordToGet = req.params.word;
  const word = await Word.findOne({ word: wordToGet });
  if (word) {
    res.json({ word: word });
  } else {
    res.status(404).json({ message: 'Word not found!' });
  }
});

// Cập nhật một "word" hiện có
app.put('/words/:id', async (req, res) => {
  const updatedWord = await Word.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedWord);
});

// Xóa một "word"
app.delete('/words/:id', async (req, res) => {
  const deletedWord = await Word.findByIdAndDelete(req.params.id);
  res.json(deletedWord);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An error occurred!' });
});

app.listen(3000, () => console.log('Server is running on port 3000'));