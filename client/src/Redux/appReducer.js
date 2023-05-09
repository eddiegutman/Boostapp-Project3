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
        case 'ADD_SUB': {
            const sub = action.payload;

            const moviesCopy = [...state.movies];
            const movieIndex = moviesCopy.findIndex(entry => entry.movie._id === sub.movieID);
            const movie = moviesCopy[movieIndex].movie;

            const membersCopy = [...state.members];
            const memberIndex = membersCopy.findIndex(entry => entry.member._id === sub.memberID);
            const member = membersCopy[memberIndex].member;

            moviesCopy[movieIndex].subscribers.push({
                member: member,
                date: sub.date
            });
            membersCopy[memberIndex].subscriptions.push({
                movie: movie,
                date: sub.date
            })

            return { movies: [...moviesCopy], members: [...membersCopy] };
        }
        default:
            return state;
    }
}

export default appReducer;