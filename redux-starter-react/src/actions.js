import * as actions from "./actionTypes"

export const bugAddedAction = function (description) {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description: description,
        }
    }
}

export const bugRemovedAction = function (id) {
    return {
        type: actions.BUG_REMOVED,
        payload: {
            id: id
        }
    }
}