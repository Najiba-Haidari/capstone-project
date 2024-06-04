import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = ({setIsLoggedIn}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      // Clear previous error if any
     
      // Handle successful login
      console.log('Login successful');
      setError(null);
      setEmail("")
      setPassword("")
      setIsLoggedIn(true)
      navigate('/')
    } catch (err) {
      // Handle failed login
      console.error('Login error:', err.message);
      setError(err.message);
    }
  };

  return (
    <div className="transparent-login ">
      <h2 className="my-3 ">Login</h2>
      <form onSubmit={handleSubmit} className="">
        <div>
          {/* <label htmlFor="email">Email:</label> */}
          <input
          className="p-2 my-3 w-100"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div>
          {/* <label htmlFor="password">Password:</label> */}
          <input
          className="p-2 my-3 w-100"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" className="btn btn-primary w-50 p-2 my-3">Login</button>
      </form>
    </div>
  );
};

export default Login;