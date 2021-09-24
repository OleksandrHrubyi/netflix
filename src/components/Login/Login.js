import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom'
import { loginUser } from "../../redux/User/userOperation";
import { getErrorMessage } from "../../redux/User/userSelectors";
import MainLayout from 'components/MainLayout/MainLayout'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./login.module.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        return console.log("No such type of data");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      onLogin({ email, password });
      reset();
      return;
    }
  };

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <Form className={styles.form} onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail" className={styles.email}>
            <Form.Label className={styles.label}>Sign In</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="off"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              required
              autoComplete="off"
            />
          </Form.Group>

          <Button variant="danger" type="submit" block className={styles.btn}>
            Login
          </Button>
          <div>
            <span className={styles.signUp}>New to Netflix?</span>
            <NavLink className={styles.registration} to="/registr">
              <span> Sign up</span>
            </NavLink></div>
        </Form>

      </div>
    </MainLayout>
  );
}

const mapStateToProps = (state) => ({
  error: getErrorMessage(state),
});

const mapDispatchToProps = {
  onLogin: loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
