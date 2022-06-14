// import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import { characterFilms } from '../redux/characterInfo'
// import { getPersonages } from '../redux/films'
// import { getMovieDetails, getMoviePersonages, charactersInfo } from '../redux/movieDetailsInfo'

export const instance = axios.create({
  baseURL:`https://swapi.dev/api/`,
  headers:{
    "Content-Type": "application/json"
  }
})
// export  const getPersonagesByMovie = createAsyncThunk(
//   'movieDetails/getPersonagesByMovie',
//   async (id, {dispatch}) => {
//     return  axios.all(id.map((end) => axios.get(end))).then(
//       (res => {
//           dispatch(charactersInfo(res.map(i => i.data)))
//       })
//     )   
// })
// //змінив dispatch бере з movie
// export  const getPersonageFilms = createAsyncThunk(
//   'personageInfo/getPersonageFilms',
//   async (id, {dispatch}) => {
//     return  axios.all(id.map((end) => axios.get(end))).then(
//       (res => {
//           dispatch(getPersonages(res.map(i => i.data)))
//       })
//     )   
// })

///............SAGA-API..........//
///............SAGA-API..........//
export const getSagaMovieByIdAPI = (id) => 
   instance.get(`films/`, {
      params: {
        id: id
      }
    }
)
  
export const moviesPersonageAPI = (end) => {
  return axios.all(end.map((endpoint) => axios.get(endpoint))).then(
    axios.spread((...data) => {
      return data;
    })
  )
}

export const personageDetailAPI = (url) => {
  return axios.get(url)
}
export const personageMoviesAPI = (end) => {
  return axios.all(end.map((endpoint) => axios.get(endpoint))).then(
    axios.spread((...data) => {
      return data;
    })
  )
}

