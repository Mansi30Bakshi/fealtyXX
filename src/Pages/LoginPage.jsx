import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../services/authService';
import "./Login.css";

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authenticateUser(username, password)) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
    <h1 className='animatedText'>Hey,Welcome to Task Tracker Interface</h1>
    <form onSubmit={handleSubmit} className='uform'>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
    </>
  );
}
