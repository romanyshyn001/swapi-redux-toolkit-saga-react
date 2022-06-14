import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personageDetails: [],
    personageFilmLinks: [],
    isLoading: false,
    filmsInfo: []
}

const personageInfo = createSlice({
    name:'personageInfo',
    initialState,
    reducers:{
    getCharacterInfo: (state, action) => {
        state.personageDetails = action.payload
        state.isLoading = false
    },
    characterInfoLoading: (state, {payload}) => {
        state.isLoading = true
    },
    //........SET_FILMS........//
    characterFilmsLinks:(state, {payload}) => {
        state.personageFilmLinks = payload
        state.isLoading = false
    },
    
    // characterFilmsLoading: (state, {payload}) => {
    //     state.isLoading = true
    // },
    //........GET_FILMS........//
    setFilmsInfoLoading: (state, {payload}) => {        
        state.isLoading = true
    },
    getFilmsInfo: (state, {payload}) => {
        state.filmsInfo = payload
        state.isLoading = false
    },
    }
})

export const { getCharacterInfo, characterInfoLoading, characterFilmsLinks,
    characterFilmsLoading, setFilmsInfoLoading, getFilmsInfo } = personageInfo.actions
export default personageInfo.reducer