import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js'; // Bytt til .js hvis du ikke bruker JSX i denne filen

function Login() {
  console.log('Rendering Login Component');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      setError('Failed to log in. Please check your email and password.');
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Login</h2>
      {error && <p className="alert alert-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
