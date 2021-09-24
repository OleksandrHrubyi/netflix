import { createSelector } from "reselect";

export const getAllShows = (state) => state.shows.items;
export const getFilterState = (state) => state.shows.filter;

export const getShows = createSelector(
    [getAllShows, getFilterState],
    (items, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return items.filter((el) =>
            el.name.toLowerCase().includes(normalizedFilter)
        );
    }
);
