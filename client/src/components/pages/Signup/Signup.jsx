import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Signup.css'

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
        <div className="transparent-signup">
        <h2 className="my-3">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                className="p-2 my-3 w-100"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <br/>
                <input
                className="p-2 my-3 w-100"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                  <br/>
                <input
                className="p-2 my-3 w-100"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                  <br/>
                <button className="btn btn-primary w-50 p-2 my-3" type="submit" >Signup</button>
            </form>
        </div>
    )
}