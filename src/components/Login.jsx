import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
`;

const Form = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  max-width: 400px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary || '#007bff'};
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  width: 100%;
  margin-top: 1rem;
  cursor: pointer;
`;

const Toggle = styled.p`
  margin-top: 1rem;
  color: #555;
  cursor: pointer;
  text-align: center;
`;

const Welcome = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  text-align: center;
`;

const LoginPage = ({ onLoginSuccess }) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [registerMode, setRegisterMode] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(()=>{
    const sessionUser = JSON.parse(localStorage.getItem('sessionUser'));
    if(sessionUser){
      setLoggedInUser(sessionUser);
    }
  })
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const exists = storedUsers.some(user => user.username === form.username);
    if (exists) {
      alert('User already exists');
    } else {
      const updateUser = [...storedUsers, form];
      localStorage.setItem('users', JSON.stringify(updateUser));
      alert('Successfully registered!');
      setRegisterMode(false);
    }
  };

  const handleLogin = () => {
     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const match = storedUsers.find(
      user => user.username === form.username && user.password === form.password
    );

    if (match) {
      alert('Login successful!');
      setLoggedInUser(match);
      localStorage.setItem('sessionUser', JSON.stringify(match));
      onLoginSuccess(match);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = ()=>{
    localStorage.removeItem('sessionUser');
    setLoggedInUser(null);
    alert("Logged out successfully.");
  }
  if (loggedInUser) {
    return (
      <Container>
        <Welcome>
          <h2>Welcome, {loggedInUser.username}!</h2>
          <Button onClick={handleLogout}>Logout</Button>
        </Welcome>
      </Container>
    );
  }

  return (
    <Container>
      <Form>
      <h2>{registerMode ? "Register" : "Login"}</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
      />
      {registerMode ? (
        <Button onClick={handleRegister}>Register</Button>
      ) : (
        <Button onClick={handleLogin}>Login</Button>
      )}
      <Toggle
        onClick={() => setRegisterMode(!registerMode)}
        style={{ color: '#1e3a8a', marginTop: '1rem', cursor: 'pointer', textAlign: 'center' }}
      >
        {registerMode ? "Already have an account? Login" : "Don't have an account? Register"}
      </Toggle>
      </Form>
    </Container>
  );
};

export default LoginPage;