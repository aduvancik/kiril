import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
//style
import "./admin.scss";
import AdmHeader from '../../components/admHeader/AdmHeader';

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      setError('');
    } catch (err) {
      setError('Incorrect email or password. Please try again.');
    }
  };

  return (
    <div className="admin-container">
      {!isLoggedIn ? (
        <div className="login-form">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div className="admin-content">
          <AdmHeader />
        </div>
      )}
    </div>
  );
}
