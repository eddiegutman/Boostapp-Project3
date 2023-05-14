import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';
import { useDispatch } from 'react-redux';

import { getAllMoviesWithSubs } from './libs/movieUtils';
import { getAllMembersWithSubs } from './libs/membersUtils';

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
import Login from './Components/Main/Login';
import Register from './Components/Main/Register';
import NavBar from './Components/Main/NavBar';
import NonExist from './Components/Main/NonExist';
import Home from './Components/Main/Home';
import NoAccess from './Components/Main/NoAccess';

export const AuthContext = createContext();

function App() {
  const [authentication, setAuthentication] = useState({ success: false, user: null });
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
      <AuthContext.Provider value={{ authentication, setAuthentication }}>
        <h1>Movies - Subscriptions Web Site</h1>
        <NavBar />
        <div style={{ border: '2px solid black' }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
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
            <Route path='noAccess' element={<NoAccess />} />
            <Route path="*" element={<NonExist />} />
          </Routes>
        </div>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
