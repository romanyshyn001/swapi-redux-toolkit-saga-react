import { createSlice} from '@reduxjs/toolkit'


const initialState = {    
  list: [],
  isLoading: false,

  // moviesInfo: {},
  // personages: [],
  // characters: [],
  
  //characterInfo: {}
}

const moviesList = createSlice({
  name: 'movies',
  initialState,
  reducers:{
    moviesAll: (state, {payload}) => {
      state.list = payload
      state.isLoading = false
    },
    moviesFetch: (state, {payload}) => {
      state.isLoading = true
    },
    //..........MOVIE DETAIL.........//
    // getMovieDetails: (state, action) => {
    //   state.moviesInfo = action.payload
    //   state.isLoading = false
    // },
    // movieDetailsFetch: (state, {payload}) => {
    //   state.isLoading = true
    // },
    //..........PERSONAGELINKS..........///
    // personageLinkFetch: (state) => {
    //   state.isLoading = true
    // },
    // getPersonByLink: (state, {payload}) => {
    //   state.characters = payload
    //   state.isLoading = false
    // },
    //..........PERSONAGES..........//
    // personagesFetch: (state, {payload}) => {
    //   state.isLoading = true
    // },
    // getPersonages: (state, {payload}) => {
    //   state.personages = payload
    //   state.isLoading = false
    // },
    //..........CHARACTERSINFO..........//
    //.......ERROR........//
    // characterInfoFetch: (state) => {
    //   state.isLoading = true
    // },
    // getCharacterDetails: (state, {payload}) => {
    //   state.characterInfo = payload
    //   state.isLoading = false
    // } 
  },
})

export const {getMovieDetails, movieDetailsFetch, moviesFetch, moviesAll,
getPersonages, personagesFetch, personageLinkFetch, getPersonByLink,
characterInfoFetch, getCharacterDetails } = moviesList.actions
export default moviesList.reducer
















