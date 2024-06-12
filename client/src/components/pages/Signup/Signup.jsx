import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
} from '@chakra-ui/react';
import './Signup.css';

const SIGNUP_URL= import.meta.env.DEV ? 'http://localhost:3000/api/users'
: "https://haidari-najiba-exercisexpert-capstone.onrender.com/api/users" 

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(SIGNUP_URL, {
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
    <Box border='1px' borderColor='gray.200' boxShadow='2xl' p={6} rounded='md' className="transparent-signup">
      <Heading as="h2" size="lg" mb={4}>Sign Up</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            className="p-2 my-3 w-100"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            className="p-2 my-3 w-100"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            className="p-2 my-3 w-100"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </FormControl>
        <Button className="w-50 p-2 my-3" mt={4} colorScheme="blue" type="submit">Sign Up</Button>
      </form>
    </Box>
  );
}
