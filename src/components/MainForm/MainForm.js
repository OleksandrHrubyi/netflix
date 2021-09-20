import React, { useState, useEffect } from "react";
import styles from "../MainForm/mainform.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function MainForm({ condition }) {
    const [value, setValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.value);
    }
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return <div className={styles.mainForm}>
        {condition && <div>
            <h2 className={styles.title}>Unlimited movies, TV shows, and more.</h2>
            <p className={styles.subtitle}>Watch anywhere. Cancel anytime.</p>
        </div>}
        <span className={styles.info}>Ready to watch? Enter your email to log in your account.</span>
        <Form className={styles.form} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" className={styles.inputContainer}>
                <Form.Control
                    type="text"
                    name="name"
                    value={value}
                    maxLength="40"
                    onChange={handleChange}
                    placeholder="Email address"
                    autoComplete="off"
                    className={styles.input}
                />
            </Form.Group>
            <Button type="submit" variant="danger" block className={styles.submitBtn}>
                Get Started
            </Button>
            {/* <button className={styles.submitBtn} type="submit"> Get Started</button> */}
        </Form>
    </div>
}


export default MainForm