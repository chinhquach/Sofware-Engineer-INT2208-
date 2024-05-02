import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const fetchWords = async () => {
      const response = await axios.get('/words');
      setWords(response.data.words);
    };

    fetchWords();
  }, []);

  return (
    <div>
      <h1>Danh sách từ</h1>
      <table>
        <thead>
          <tr>
            <th>Từ</th>
            <th>Định nghĩa</th>
          </tr>
        </thead>
        <tbody>
          {words.map(word => (
            <tr key={word._id}>
              <td>{word.word}</td>
              <td>{word.definition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
