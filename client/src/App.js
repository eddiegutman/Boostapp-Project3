import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Movies from './Components/Movies/Movies';
import AddMovie from './Components/Movies/AddMovie';
import MovieList from './Components/Movies/MovieList';
import Subscriptions from './Components/Subscriptions/Subscriptions';
import EditMovie from './Components/Movies/EditMovie';

import { getAllMoviesWithSubs } from './libs/movieUtils';
import { getAllMembersWithSubs } from './libs/membersUtils';

function App() {
  const dispatch = useDispatch();

  const getData = async () => {
    const movies = await getAllMoviesWithSubs();
    const members = await getAllMembersWithSubs();
    const data = {
      movies: movies,
      members: members
    }
    dispatch({ type: 'LOAD', payload: data });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Movies - Subscriptions Web Site</h1>
      <Link to='/movies'>Movies</Link> &nbsp;
      <Link to='/subscriptions'>Subscriptions</Link> <br />
      <div style={{ border: '2px solid black' }}>
        <Routes>
          <Route path='/movies' element={<Movies />} >
            <Route path='all' element={<MovieList />} />
            <Route path='addMovie' element={<AddMovie />} />
            <Route path='edit/:id' element={<EditMovie />} />
          </Route>
          <Route path='/subscriptions' element={<Subscriptions />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
