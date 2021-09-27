import React, { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { registerUser } from '../../redux/User/userOperation'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from './registr.module.css'

function Registr({ onSubmit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const reset = () => {
    setName('')
    setEmail('')
    setPassword('')
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      default:
        console.log('No such type of data')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name && email && password) {
      onSubmit({ name, email, password })
      reset()
      return
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Form onSubmit={handleSubmit} className={styles.form}>
          <Form.Group controlId="formBasicName">
            <Form.Label className={styles.label}>Sign Up</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your name"
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter email"
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              autoComplete="off"
            />
          </Form.Group>

          <Button variant="danger" type="submit" block className={styles.btn}>
            Submit
          </Button>
          <div>
            <span className={styles.signUp}>Not New to Netflix?</span>
            <NavLink className={styles.registration} to="/login">
              <span> Log In</span>
            </NavLink>
          </div>
        </Form>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  onSubmit: registerUser,
}

export default connect(null, mapDispatchToProps)(Registr)
