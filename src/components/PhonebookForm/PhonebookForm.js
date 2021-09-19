import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  addContactsOperation,
  getContactsOperation,
} from "../../redux/Contacts/contactsOperations";
import { getAllContacts } from "../../redux/Contacts/contactsSelectors";
import styles from "../PhonebookForm/phonebookForm.module.css";

import { alert, defaultModules } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/BrightTheme.css";

defaultModules.set(PNotifyMobile, {});

function PhonebookForm({ getContacts, onSubmit, sameContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      alert({
        text: "Please enter name",
      });
      return;
    }

    if (number.length === 0) {
      alert({
        text: "Please enter number",
      });
      return;
    }

    const result = sameContact.find((el) => el.name === name);

    if (result) {
      alert({
        text: "This contact already exists",
      });
      return;
    }

    onSubmit({ name, number });
    return reset();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        console.log("No such type of data");
    }
  };

  return (
    <div className={styles.container}>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Add your contact</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            maxLength="40"
            onChange={handleChange}
            placeholder="Name"
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Enter number</Form.Label>
          <Form.Control
            type="number"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder="Phone number 380"
            autoComplete="off"
          />
        </Form.Group>
        <Button type="submit" variant="dark" block>
          Add contact
        </Button>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  sameContact: getAllContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (value) => dispatch(addContactsOperation(value)),
  getContacts: () => dispatch(getContactsOperation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookForm);
