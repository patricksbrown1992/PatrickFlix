import React from "react";
import { Link } from "react-router-dom";

const SignUpForm = (props) => {
  const [email, updateEmail] = useState(() => {
    return "";
  });

  const [password, updatePassword] = useState(() => {
    return "";
  });

  function handleSubmit(e) {
    e.preventDefault();
    props.signup({ email, password });
    updatePassword("");
    updateEmail("");
    props.clearErrors();
  }

  return (
    <div className="sign-up-form">
      <div className="sign-up-title">
        <Link to="/">
          <img src={window.big} />
        </Link>
      </div>
      <div className="sign-in-body">
        <h1>Sign Up</h1>
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => updateEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => updatePassword(e.target.value)}
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
          <div className="sign-up-continue">
            <button type="submit">Sign Up</button>
          </div>
        </form>

        <br />

        <div className="redirect-to-sign-in">
          <h3>Already have an account?</h3>
          <Link to="/login"> Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
