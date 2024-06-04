import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
            try {
                const response = await fetch('http://localhost:3000/api/users', {
                    method: 'POST',
                    body: JSON.stringify({ username, email, password }),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const data = await response.json();
                console.log(data);
                setUsername("");
            setEmail("");
            setPassword("");
            navigate('/login');
            } catch (err) {
                console.log(err);
            }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <br/>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                  <br/>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                  <br/>
                <button type="submit" >Signup</button>
            </form>
        </div>
    )
}