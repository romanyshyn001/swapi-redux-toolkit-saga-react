import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage';
import MenuNavigation from './Components/Navigation/Navbar';
import './App.css'
import MoviePage from './Components/Movies/MoviePage';
import PersonageContainer from './Components/Personage/Personage';

function App() {

   return (
      <div className='App-header'>
         <MenuNavigation/>
         <div>
            <Routes>
               <Route path='/homepage' element={<HomePage/>}></Route>
               <Route path='/movies/:movieId' element={<MoviePage/>}></Route>
               <Route path='personage/:perId' element={<PersonageContainer />}></Route>
            </Routes>
         </div>
      </div>
   );
}

export default App;
