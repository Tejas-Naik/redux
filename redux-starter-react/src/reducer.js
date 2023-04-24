import * as actions from "./actionTypes";
let lastId = 0;

const reducer = function (state = [], action) {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    description: action.payload.description,
                    id: ++lastId,
                    isResolved: false,
                }
            ]

        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);

        case actions.BUG_RESOLVED:
            return state.map(bug => {
                if (bug.id === action.payload.id) {
                    return { ...bug, isResolved: true };
                }
                return bug; // return the original bug object for all other cases
            });

        default:
            return state;

    }
}

export default reducer;