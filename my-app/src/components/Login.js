// src/Login.js
import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (event) => {
        if (event.target.name === 'username') {
            setUsername(event.target.value);
        } else if (event.target.name === 'password') {
            setPassword(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Thêm logic xử lý đăng nhập ở đây
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" onChange={handleInputChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={handleInputChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Login;