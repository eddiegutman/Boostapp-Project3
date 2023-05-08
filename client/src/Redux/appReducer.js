function appReducer(state = { movies: [], members: [] }, action) {
    switch (action.type) {
        case 'LOAD': {
            const data = action.payload;
            return { movies: [...data.movies], members: [...data.members] };
        }
        case 'ADD_MOVIE': {
            const movie = action.payload;
            const entry = {
                movie: movie,
                subscribers: []
            }
            return { movies: [...state.movies, entry], members: [...state.members] };
        }
        default:
            return state;
    }
}

export default appReducer;