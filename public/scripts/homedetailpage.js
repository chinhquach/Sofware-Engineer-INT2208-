import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function WordDetailPage() {
  const [word, setWord] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchWord = async () => {
      const response = await axios.get(`/words/${id}`);
      setWord(response.data.word);
    };

    fetchWord();
  }, [id]);

  if (!word) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{word.word}</h1>
      <p>{word.definition}</p>
    </div>
  );
}

export default WordDetailPage;