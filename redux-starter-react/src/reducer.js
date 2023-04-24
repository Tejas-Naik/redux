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

        default:
            return state;

    }
}

export default reducer;