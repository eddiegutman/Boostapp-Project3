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
        case 'ADD_MEMBER': {
            const member = action.payload;
            const entry = {
                member: member,
                subscriptions: []
            }
            return { movies: [...state.movies], members: [...state.members, entry] };
        }
        case 'UPDATE_MEMBER': {
            const member = action.payload;
            const index = state.members.findIndex(entry => entry.member._id === member._id);
            state.members[index].member = { ...member };
            return { movies: [...state.movies], members: [...state.members] };
        }
        case 'DELETE_MEMBER': {
            const id = action.payload;
            const copy = state.members.filter(entry => entry.member._id !== id);
            return { movies: [...state.movies], members: [...copy] };
        }
        default:
            return state;
    }
}

export default appReducer;