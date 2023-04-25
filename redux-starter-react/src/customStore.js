const customStore = function () {
    let state;

    function getState() {
        return state;
    }

    return {
        getState
    }
}

export default customStore;