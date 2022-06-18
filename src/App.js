import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import MenuNavigation from './Components/Navigation/Navbar';
import './App.css'
import MovieContainer from './pages/Movies/MovieContainer';
import PersonageContainer from './pages/Personage/PersonageContainer';
import HomePageContainer from './pages/HomePage/HomeContainer';

function App() {

   return (
      <div className='App-header'>
         <MenuNavigation/>
         <div>
            <Routes>
               <Route path='/homepage' element={<HomePageContainer/>}></Route>
               <Route path="/" element={<Navigate replace to="/homepage" />} />
               <Route path='/movies/:movieId' element={<MovieContainer/>}></Route>
               <Route path='personage/:perId' element={<PersonageContainer/>}></Route>
            </Routes>
         </div>
      </div>
   );
}

export default App;
