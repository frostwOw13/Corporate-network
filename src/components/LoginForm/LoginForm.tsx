import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import setUsers from '../../redux/actions/usersActions';
import { IUser, LoginFormProps } from '../../shared/interfaces';
import './LoginForm.scss';

const LoginForm: React.FC<LoginFormProps> = ({ loginError, login }) => {
  const [mode, setMode] = useState<string>('login');
  const [userDetails, setUserDetails] = useState<IUser>({
    username: '',
    password: '',
    id: 0,
  });
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();

  const switchMode = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;
    setMode(target.id);
  };

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'confirmPassword') setConfirmPassword(value);
    else setUserDetails({ ...userDetails, [id]: value });
  };

  const submitHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (mode === 'login') {
      login(userDetails.username, userDetails.password);
    } else if (mode === 'signup') {
      if (userDetails.username && userDetails.password) {
        if (userDetails.password === confirmPassword) {
          dispatch(
            setUsers({ ...userDetails, id: Math.ceil(Math.random() * 100000) })
          );
          login(userDetails.username, userDetails.password, mode);
          setError('');
        } else setError('Passwords do not match');
      } else setError("Username or password shouldn't be empty");
    }
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
            {loginError !== '' ? <div className="error">{loginError}</div> : ''}
            <input
              className="first"
              id="username"
              name="login"
              onChange={changeInputHandler}
              placeholder="username"
              type="password"
              value={userDetails.username}
            />
            <input
              className="second"
              id="password"
              name="login"
              onChange={changeInputHandler}
              placeholder="password"
              type="password"
              value={userDetails.password}
            />
            <input
              className="third"
              onClick={submitHandler}
              type="submit"
              value="Log In"
            />
          </form>
        ) : (
          <form>
            {error !== '' ? <div className="error">{error}</div> : ''}
            <input
              className="first"
              id="username"
              name="signup"
              onChange={changeInputHandler}
              placeholder="username"
              type="text"
              value={userDetails.username}
            />
            <input
              className="second"
              id="password"
              name="signup"
              onChange={changeInputHandler}
              placeholder="password"
              type="password"
              value={userDetails.password}
            />
            <input
              className="third"
              id="confirmPassword"
              name="signup"
              onChange={changeInputHandler}
              placeholder="confirm password"
              type="password"
              value={confirmPassword}
            />
            <input
              className="fourth"
              onClick={submitHandler}
              type="submit"
              value="Sign Up"
            />
          </form>
        )}

        <div id="formFooter" />
      </div>
    </div>
  );
};

export default LoginForm;
