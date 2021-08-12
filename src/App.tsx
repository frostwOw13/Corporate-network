import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './App.scss';
import Chat from './components/Chat/Chat';
import LoginForm from './components/LoginForm/LoginForm';
import { RootState } from './shared/interfaces';

const App: React.FC = () => {
  const [user, setUser] = useState({ username: '12', password: '', id: 0 });
  const [error, setError] = useState<string>('');

  const users = useSelector((state: RootState) => state.users);

  const login = (
    loginUsername: string,
    loginPassword: string,
    mode?: string
  ) => {
    if (mode === 'signup')
      setUser({ username: loginUsername, password: '', id: 0 });
    users.forEach((userItem) => {
      if (userItem.username === loginUsername) {
        if (userItem.password === loginPassword)
          setUser({
            username: loginUsername,
            password: userItem.password,
            id: userItem.id,
          });
      } else setError('Username or password incorrect');
    });
  };

  const logout = () => {
    setUser({ username: '', password: '', id: 0 });
    setError('');
  };

  return (
    <div className="App">
      {user.username !== '' ? (
        <div className="welcome">
          <div className="welcome-header">
            <button className="welcome-btn" onClick={logout} type="button">
              Logout
            </button>
            <h2 className="welcome-message">
              Welcome, <span>{user.username}</span>
            </h2>
          </div>
          <Chat author={user} />
        </div>
      ) : (
        <LoginForm login={login} loginError={error} />
      )}
    </div>
  );
};

export default App;
