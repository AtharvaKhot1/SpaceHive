import React, { useState } from 'react';
import { auth } from '../lib/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ open, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setMode(initialMode);
    setError('');
    setEmail('');
    setPassword('');
  }, [open, initialMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (mode === 'signup') {
        await createUserWithEmailAndPassword(auth, email, password);
        onClose();
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        onClose();
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">
          {mode === 'login' ? 'Log In' : 'Sign Up'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded px-3 py-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded px-3 py-2"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded font-semibold hover:bg-gray-800 transition"
            disabled={loading}
          >
            {loading ? (mode === 'login' ? 'Logging in...' : 'Signing up...') : (mode === 'login' ? 'Log In' : 'Sign Up')}
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          {mode === 'login' ? (
            <>
              Don't have an account?{' '}
              <button className="text-blue-600 hover:underline" onClick={() => setMode('signup')}>
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button className="text-blue-600 hover:underline" onClick={() => setMode('login')}>
                Log In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal; 