import React, { useState } from 'react';

import './LoginForm.scss';

const LoginForm: React.FC = () => {
  const [mode, setMode] = useState<string>('login');

  const switchMode = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;
    setMode(target.id);
  };

  return (
    <div className="wrapper">
      <div id="formContent">
        <h2
          aria-hidden="true"
          className={mode === 'login' ? 'active' : 'inactive'}
          id="login"
          onClick={switchMode}
        >
          Sign In
        </h2>
        <h2
          aria-hidden="true"
          className={mode === 'login' ? 'inactive' : 'active'}
          id="signup"
          onClick={switchMode}
        >
          Sign Up
        </h2>

        {mode === 'login' ? (
          <form>
            <input
              className="first"
              id="login"
              name="login"
              placeholder="username"
              type="text"
            />
            <input
              className="second"
              id="password"
              name="login"
              placeholder="password"
              type="text"
            />
            <input className="third" type="submit" value="Log In" />
          </form>
        ) : (
          <form>
            <input
              className="first"
              id="signup"
              name="signup"
              placeholder="username"
              type="text"
            />
            <input
              className="second"
              id="password"
              name="signup"
              placeholder="password"
              type="text"
            />
            <input
              className="third"
              id="confirmPassword"
              name="signup"
              placeholder="confirm password"
              type="text"
              value=""
            />
            <input className="fourth" type="submit" value="Sign Up" />
          </form>
        )}

        <div id="formFooter" />
      </div>
    </div>
  );
};

export default LoginForm;
