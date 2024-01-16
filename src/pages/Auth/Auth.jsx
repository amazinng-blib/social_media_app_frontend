import React from 'react';
import './Auth.css';
import Logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="Logo" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore ideas throughout the world</h6>
        </div>
      </div>

      <Login />
    </div>
  );
};

function Login() {
  return (
    <div className="a-right ">
      <form className="infoForm authForm">
        <h3>Login</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          {/* <input
            type="password"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmPassword"
          /> */}
        </div>
        <div>
          {/* <Link to={'/signup'}> */}
          <span style={{ fontSize: '12px' }}>
            Don't have an account? Signup
          </span>
          {/* </Link> */}
        </div>
        <button className="button infoButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastName"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmPassword"
          />
        </div>
        <div>
          <span style={{ fontSize: '12px' }}>
            Already have an accout? Login
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
