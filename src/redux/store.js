import { configureStore } from '@reduxjs/toolkit'
import { all, fork } from 'redux-saga/effects'
import createSagaMiddleware from '@redux-saga/core'

import moviesList from './slices/films'
import movieDetailsInfo from './slices/movieDetailsInfo'
import characterInfo from './slices/characterInfo'

import movieAllSaga from './sagas/MoviesAll'
import movieInfoWatcher from './sagas/MovieInfo'
import personageInfoWatcher from './sagas/personageInfo'


let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export default configureStore({
  reducer: {
    movies: moviesList,
    movieDetails: movieDetailsInfo,
    personage: characterInfo
  },
  
  middleware: getDefaultMiddleware => {
   return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware)
}
})

function* rootSaga() {
  yield all([
    fork(movieAllSaga),
    fork(movieInfoWatcher),
    fork(personageInfoWatcher)
  ]);
}
sagaMiddleware.run(rootSaga)