const axios = require('axios');
require('dotenv').config();

async function extractVocabulary(text) {
  const words = text.split(/\W+/);
  const vocabulary = [];

  for (let word of words) {
    try {
      const response = await axios.get(`https://api.wordnik.com/v4/word.json/${word}/definitions?limit=1&includeRelated=false&use=false&includeTags=false&api_key=${process.env.WORDNIK_API_KEY}`);
      if (response.data.length > 0) {
        vocabulary.push({
          word: response.data[0].word,
          definition: response.data[0].text
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return vocabulary;
}

module.exports = { extractVocabulary };