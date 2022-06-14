import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filmDetails: {},
  characterLinks: [],
  characters: [],
  isLoading: false,
}

const movieDetails = createSlice({
  name: 'movieDetails',
  initialState,
  reducers:{
    setMovieDetails: (state, action) => {
      state.filmDetails = action.payload
      state.isLoading = false
    },
    movieDetailsLoading: (state, {payload}) => {
      state.isLoading = true
    },
    
    setPersonageLinks: (state, {payload}) => {
      state.characterLinks = payload
      state.isLoading = false
    },
    ///GEt PERSONAGES
    getPersonagesInfo: (state, {payload}) => {
      state.characters = payload
      state.isLoading = false
    },
    personagesInfoLoading: (state, {payload}) => {
      state.isLoading = true
    },
    //GET MOVIES///
  }
 
})
//deleted reducer
export const { movieDetailsLoading, setMovieDetails, setPersonageLinks, 
  characterLinks, getPersonagesInfo, personagesInfoLoading } = movieDetails.actions
export default movieDetails.reducer

