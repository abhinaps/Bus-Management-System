import React, { useState } from 'react'
import AdminService from '../services/AdminService';

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = (username, password) => {
        AdminService.login(username, password)
    }
    return (
        <div>
            <input
                placeholder='username'
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required />
            <input
                placeholder='password'
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            <button onClick={() => login(username, password)} >Login</button>

        </div>
    )
}
