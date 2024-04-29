document.addEventListener('DOMContentLoaded', function() {
  const inputSource = document.getElementById('inputSource');
  const inputContent = document.getElementById('inputContent');
  const generateBtn = document.getElementById('generateBtn');
  const outputSection = document.getElementById('outputSection');
  const vocabularyList = document.getElementById('vocabularyList');
  const exportBtn = document.getElementById('exportBtn');

  generateBtn.addEventListener('click', function() {
    // Lấy dữ liệu từ các phần tử HTML
    const selectedSource = inputSource.value;
    const content = inputContent.value;

    // Gọi hàm xử lý tạo danh sách từ vựng
    const vocabulary = generateVocabulary(content);

    // Hiển thị danh sách từ vựng trên giao diện
    displayVocabularyList(vocabulary);

    // Hiển thị phần kết quả
    outputSection.style.display = 'block';
  });

  exportBtn.addEventListener('click', function() {
    // Simulate exporting the vocabulary list
    alert('Exporting vocabulary list...');
    // You can implement the actual export functionality here
  });

  // Hàm xử lý tạo danh sách từ vựng (giả lập)
  function generateVocabulary(content) {
    // Hàm này thường sẽ sử dụng trí tuệ nhân tạo để phân tích nội dung và tạo danh sách từ vựng
    // Trong trường hợp này, chúng ta sẽ tạo một danh sách giả lập
    const words = content.split(/\s+/);
    const vocabulary = words.filter(word => word.length > 4 && word.length < 10);
    return vocabulary.slice(0, 5); // Trả về một phần nhỏ của danh sách từ vựng được tạo
  }

  // Hàm hiển thị danh sách từ vựng được tạo
  function displayVocabularyList(vocabulary) {
    // Xóa các mục danh sách trước đó
    vocabularyList.innerHTML = '';

    // Thêm từng từ vựng vào danh sách
    vocabulary.forEach(word => {
      const listItem = document.createElement('li');
      listItem.textContent = word;
      vocabularyList.appendChild(listItem);
    });
  }
});
