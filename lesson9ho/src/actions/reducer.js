let initialState = {
    photos: null
};

const reducer = (state = initialState, action) => {
    if (action.type === 'UPDATE_IMAGES') {
        console.log('here')
        return {
            ...state,
            photos: action.images
        }
    }
    return state;
}

export default reducer;