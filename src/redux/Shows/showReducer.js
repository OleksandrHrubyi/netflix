import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
    getShowsSucces,

} from "./showAction";

const itemReducer = createReducer([], {
    // [getShowsSucces]: (state, { payload }) => [...state, payload],
    [getShowsSucces]: (_, { payload }) => payload,
    // [deleteContactSucces]: (state, { payload }) =>
    //     state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer("", {
    [getShowsSucces]: (_, { payload }) => payload,
});

const showReducer = combineReducers({
    items: itemReducer,
    filter: filterReducer,
});

export default showReducer;
