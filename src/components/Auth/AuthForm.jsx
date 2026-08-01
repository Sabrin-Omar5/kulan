import { useState } from 'react';
import { useAuthActions } from '@convex-dev/auth/react';
import './AuthForm.css';

function AuthForm({ initialMode = 'signup', onDone }) {
  const { signIn } = useAuthActions();
  const [mode, setMode] = useState(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const isSignup = mode === 'signup';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await signIn('password', {
        email,
        password,
        ...(isSignup ? { name } : {}),
        flow: isSignup ? 'signUp' : 'signIn',
      });
      onDone?.();
    } catch {
      setError(
        isSignup
          ? "Couldn't create your account. That email may already be in use."
          : 'Incorrect email or password.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section auth-form-section">
      <div className="container auth-form-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h1 className="auth-form__title">
            {isSignup ? 'Create your account' : 'Log in to Kulan'}
          </h1>

          {isSignup && (
            <label className="auth-form__field">
              Name
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                autoComplete="name"
              />
            </label>
          )}

          <label className="auth-form__field">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
            />
          </label>

          <label className="auth-form__field">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              minLength={8}
              autoComplete={isSignup ? 'new-password' : 'current-password'}
            />
          </label>

          {error && <p className="auth-form__error">{error}</p>}

          <button className="auth-form__submit" type="submit" disabled={submitting}>
            {submitting ? 'Please wait…' : isSignup ? 'Sign up' : 'Log in'}
          </button>

          <p className="auth-form__switch">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              className="auth-form__switch-link"
              onClick={() => {
                setError('');
                setMode(isSignup ? 'login' : 'signup');
              }}
            >
              {isSignup ? 'Log in' : 'Sign up'}
            </button>
          </p>
        </form>
      </div>
    </section>
  );
}

export default AuthForm;
