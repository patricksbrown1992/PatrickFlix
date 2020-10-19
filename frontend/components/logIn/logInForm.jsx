import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogInForm = (props) => {
  const [email, updateEmail] = useState(() => {
    return "";
  });

  const [password, updatePassword] = useState(() => {
    return "";
  });

  function handleChangeEmail(e) {
    e.preventDefault();
    updateEmail(e.target.value);
  }

  function handleChangePassword(e) {
    e.preventDefault();
    updatePassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.login({ email, password });
    updatePassword("");
    updateEmail("");
    props.clearErrors();
  }

  return (
    <div className="sign-in-form">
      <div className="sign-in-title">
        <Link to="/">
          <img src={window.big} />
        </Link>
      </div>
      <div className="sign-in-body">
        <h1>Sign In</h1>
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={handleChangeEmail}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={handleChangePassword}
        />
        <ul>
          <br />
          {props.errors
            ? props.errors.map((error, idx) => {
                return <li key={idx}>{error}</li>;
              })
            : ""}
          <br />
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="sign-in-continue">
            <button type="submit">Sign In</button>
          </div>
        </form>

        <br />
        <div className="redirect-to-sign-up">
          <h3>New to PatrickFlix?</h3>
          <Link to="/signup"> Sign up now.</Link>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
