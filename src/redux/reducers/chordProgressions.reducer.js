// set progressions of user reducer

const yourProgressionsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_YOUR_PROGRESSIONS':
            return action.payload;
        default:
            return state;
    }
}

export default yourProgressionsReducer;