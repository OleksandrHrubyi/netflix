import { getAllEpisod } from "../../service";
import { alert, defaultModules } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/BrightTheme.css";

import {
    getShowsRequest,
    getShowsSucces,
    getShowsError,
    // getContactsRequest,
    // getContactsSucces,
    // getContactsError,
    // deleteContactRequest,
    // deleteContactSucces,
    // deleteContactError,
} from "./showAction";


export const getShows = (_) => (dispatch) => {
    dispatch(getShowsRequest());
    getAllEpisod()
        .then((response) => dispatch(getShowsSucces(response)))
        .catch((error) => {
            dispatch(getShowsError(error));
            alert({
                text: error,
            });
        });
};