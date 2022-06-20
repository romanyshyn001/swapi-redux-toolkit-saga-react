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
// export const getSagaMovieByIdAPI = async(id) => {
//    let filmId = instance.get(`films/`, {id})
//    let people = axios.all(filmId.characters.map((endpoint) => axios.get(endpoint))).then(
//     axios.spread((...data) => {
//       return data;
//     })
//   )
//   //  return [filmId, people]
//   return filmId
// }

export const getMovieAPI = (id) => {
  return instance.get(`films/`, +id)
}
export const getMovieAllAPI = () => {
  return instance.get(`films/`)
}
export const arrayOfLinks = (end) => {
  return axios.all(end.map((endpoint) => axios.get(endpoint))).then(
    axios.spread((...data) => {
      return data;
    })
    )
}

export const personageDetailAPI = (uId) => {
  return axios.get(uId)
}




