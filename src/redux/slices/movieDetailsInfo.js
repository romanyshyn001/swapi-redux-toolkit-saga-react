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
      state.characterLinks = action.payload.characters
      state.isLoading = false
    },
    movieDetailsLoading: (state) => {
      state.isLoading = true
    },
    getPersonagesInfo: (state, {payload}) => {
      state.characters = payload
      state.isLoading = false
    },
    personagesInfoLoading: (state) => {
      state.isLoading = true
    },
  }
 
})
export const { movieDetailsLoading, setMovieDetails,
   getPersonagesInfo, personagesInfoLoading } = movieDetails.actions
export default movieDetails.reducer

