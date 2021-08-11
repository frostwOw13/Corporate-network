import React from 'react';

import './LoginForm.scss';

const LoginForm: React.FC = () => (
  <div className="wrapper">
    <div id="formContent">
      <h2 className="active"> Sign In </h2>
      <h2 className="inactive">Sign Up </h2>

      <form>
        <input
          className="first"
          id="login"
          name="login"
          placeholder="login"
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

      <div id="formFooter" />
    </div>
  </div>
);

export default LoginForm;
