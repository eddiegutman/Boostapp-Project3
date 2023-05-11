import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Movies from './Components/Movies/Movies';
import AddMovie from './Components/Movies/AddMovie';
import MovieList from './Components/Movies/MovieList';
import EditMovie from './Components/Movies/EditMovie';
import MemberList from './Components/Members/MemberList';
import AddMember from './Components/Members/AddMember';
import EditMember from './Components/Members/EditMember';
import Members from './Components/Members/Members';
import MemberSearch from './Components/Members/MemberSearch';
import MovieSearch from './Components/Movies/MovieSearch';

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
      <Link to='/movies/all'>Movies</Link> &nbsp;
      <Link to='/members/all'>Members</Link> <br />
      <div style={{ border: '2px solid black' }}>
        <Routes>
          <Route path='/movies' element={<Movies />} >
            <Route path=':id' element={<MovieSearch />} />
            <Route path='all' element={<MovieList />} />
            <Route path='addMovie' element={<AddMovie />} />
            <Route path='edit/:id' element={<EditMovie />} />
          </Route>
          <Route path='/members' element={<Members />} >
            <Route path=':id' element={<MemberSearch />} />
            <Route path='all' element={<MemberList />} />
            <Route path='addMember' element={<AddMember />} />
            <Route path='edit/:id' element={<EditMember />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
