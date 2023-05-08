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
        case 'UPDATE_MOVIE': {
            const movie = action.payload;
            const index = state.movies.findIndex(entry => entry.movie._id === movie._id);
            state.movies[index].movie = { ...movie };
            return { movies: [...state.movies], members: [...state.members] };
        }
        case 'DELETE_MOVIE': {
            const id = action.payload;
            const copy = state.movies.filter(entry => entry.movie._id !== id);
            return { movies: [...copy], members: [...state.members] };

        }
        default:
            return state;
    }
}

export default appReducer;