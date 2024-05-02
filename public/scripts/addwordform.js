import React, { useState } from 'react';
import axios from 'axios';

function AddWordForm() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newWord = {
      word,
      definition,
    };

    await axios.post('/words', newWord);

    setWord('');
    setDefinition('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Từ:
        <input type="text" value={word} onChange={(e) => setWord(e.target.value)} required />
      </label>
      <label>
        Định nghĩa:
        <textarea value={definition} onChange={(e) => setDefinition(e.target.value)} required />
      </label>
      <button type="submit">Thêm từ</button>
    </form>
  );
}

export default AddWordForm;