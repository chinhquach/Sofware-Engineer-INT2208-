import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function WordDetailPage() {
  const [word, setWord] = useState(null);
  const [newDefinition, setNewDefinition] = useState('');
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchWord = async () => {
      const response = await axios.get(`/words/${id}`);
      setWord(response.data.word);
      setNewDefinition(response.data.word.definition);
    };

    fetchWord();
  }, [id]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const updatedWord = {
      ...word,
      definition: newDefinition,
    };
    await axios.put(`/words/${id}`, updatedWord);
    setWord(updatedWord);
  };

  const handleDelete = async () => {
    await axios.delete(`/words/${id}`);
    history.push('/');
  };

  if (!word) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{word.word}</h1>
      <form onSubmit={handleUpdate}>
        <label>
          Định nghĩa:
          <textarea value={newDefinition} onChange={(e) => setNewDefinition(e.target.value)} required />
        </label>
        <button type="submit">Cập nhật định nghĩa</button>
      </form>
      <button onClick={handleDelete}>Xóa từ</button>
    </div>
  );
}

export default WordDetailPage;