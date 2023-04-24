let lastId = 0;

const reducer = function (state = [], action) {
    switch (action.type) {
        case 'bugAdded':
            return [
                ...state,
                {
                    description: action.payload.description,
                    id: ++lastId,
                    isResolved: false,
                }
            ]

        case 'bugRemoved':
            return state.filter(bug => bug.id !== action.payload.id);

        default:
            return state;

    }
}

export default reducer;