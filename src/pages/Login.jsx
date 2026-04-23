import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../shared components/Navbar';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md p-8 rounded-lg" style={{ boxShadow: 'rgba(0,0,0,0.35) 0px 5px 15px' }}>
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg px-4 py-2 w-full outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg px-4 py-2 w-full outline-none"
            />
            <button
              onClick={handleLogin}
              disabled={loading}
              className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold w-full">
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
          <p className="text-center mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="text-red-800 font-bold">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;