import { createAction } from "@reduxjs/toolkit";


export const getShowsRequest = createAction("shows/get/Request");
export const getShowsSucces = createAction("shows/get/Succes");
export const getShowsError = createAction("shows/get/Error");


export const filterShow = createAction("show/filter");
