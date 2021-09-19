import { uploadContacts, getContacts, removeContacts } from "../../service";
import { alert, defaultModules } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/BrightTheme.css";

import {
  addContactsRequest,
  addContactsSucces,
  addContactsError,
  getContactsRequest,
  getContactsSucces,
  getContactsError,
  deleteContactRequest,
  deleteContactSucces,
  deleteContactError,
} from "./contactAction";

const { v4: uuidv4 } = require("uuid");
defaultModules.set(PNotifyMobile, {});

export const addContactsOperation = (value) => (dispatch) => {
  const user = {
    id: uuidv4(),
    name: value.name,
    number: value.number,
  };

  dispatch(addContactsRequest());
  uploadContacts(user)
    .then((response) => dispatch(addContactsSucces(response)))
    .catch((error) => {
      dispatch(addContactsError(error));
      alert({
        text: error,
      });
    });
};

export const getContactsOperation = (_) => (dispatch) => {
  dispatch(getContactsRequest());
  getContacts()
    .then((response) => dispatch(getContactsSucces(response)))
    .catch((error) => {
      dispatch(getContactsError(error));
      alert({
        text: error,
      });
    });
};

export const deleteContactOperation = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  removeContacts(id)
    .then(() => dispatch(deleteContactSucces(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};
