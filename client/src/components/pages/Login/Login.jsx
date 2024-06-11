import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
  Text
} from '@chakra-ui/react';

const Login = ({ setIsLoggedIn, setToken }) => {
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
      }       
    );
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      // const { token } = response.data;

      setToken(data.token);
      // localStorage.setItem('token', token); // Store token in local storage

      setError(null);
      setEmail("");
      setPassword("");
      setIsLoggedIn(true);
      navigate('/');
    } catch (err) {
      // Handle failed login
      console.error('Login error:', err.message);
      setError(err.message);
    }
  };

  return (
    <Box border='1px' borderColor='gray.200' boxShadow='2xl' p={6} rounded='md' className="transparent-login">
      <Heading as="h2" size="lg" mb={4}>Login</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            className="p-2 my-3 w-100 inputplace"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            className="p-2 my-3 w-100"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormControl>
        {error && <Text color="red.500" mt={2}>{error}</Text>}
        <Button type="submit" className="w-50 p-2 my-3" mt={4} colorScheme="blue">Login</Button>
      </form>
    </Box>
  );
};

export default Login;
