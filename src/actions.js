import { CHANGE_SEARCH_QUERY } from "./constants";

export const setSearchQuery = (text) => ({
    type: CHANGE_SEARCH_QUERY,
    payload: text
});