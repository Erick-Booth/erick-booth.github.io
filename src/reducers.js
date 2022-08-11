import { CHANGE_SEARCH_QUERY } from "./constants";

const INITIAL_STATE = {
    searchQuery: ''
};

// Reducer
export const SEARCH_ROBOTS = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_QUERY:
            return Object.assign({}, state, searchQuery = action.payload);
            break;

        default:
            break;
    }
};