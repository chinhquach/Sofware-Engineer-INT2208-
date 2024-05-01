document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();
  
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        // Send login credentials to the server for authentication
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
  
            const data = await response.json();
  
            if (response.ok) {
                // If login is successful, alert and redirect
                alert(data.message);
                // Redirect to the dictionary creation page or perform other actions
                window.location.href = 'create-dictionary.html';
            } else {
                // If login fails, alert error message
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    });
  });
  