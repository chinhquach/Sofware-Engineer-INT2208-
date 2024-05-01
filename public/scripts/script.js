document.addEventListener('DOMContentLoaded', function() {
  const inputSource = document.getElementById('inputSource');
  const inputContent = document.getElementById('inputContent');
  const generateBtn = document.getElementById('generateBtn');
  const outputSection = document.getElementById('outputSection');
  const vocabularyList = document.getElementById('vocabularyList');
  const exportBtn = document.getElementById('exportBtn');

  generateBtn.addEventListener('click', async function() {
    const content = inputContent.value;
    
    const response = await fetch('http://localhost:5000/process', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: content })
    });

    const fetchedVocabulary = await response.json();

    displayVocabularyList(fetchedVocabulary);

    const vocabulary = generateVocabulary(content);

    displayVocabularyList(vocabulary);

    outputSection.style.display = 'block';
  });

  exportBtn.addEventListener('click', function() {
    alert('Exporting vocabulary list...');
  });

  function generateVocabulary(content) {
    const words = content.split(/\s+/);
    const vocabulary = words.filter(word => word.length > 4 && word.length < 10);
    return vocabulary.slice(0, 5);
  }

  function displayVocabularyList(vocabulary) {
    vocabularyList.innerHTML = '';

    vocabulary.forEach(word => {
      const listItem = document.createElement('li');
      listItem.textContent = word;
      vocabularyList.appendChild(listItem);
    });
  }
});
