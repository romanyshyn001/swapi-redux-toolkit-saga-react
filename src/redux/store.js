import { configureStore } from '@reduxjs/toolkit'
import characterInfo from './characterInfo'
import moviesList from './films'
import movieDetailsInfo from './movieDetailsInfo'
//
import createSagaMiddleware from '@redux-saga/core'
import movieAllSaga from './sagas/MoviesAll'
import { all, fork, } from 'redux-saga/effects'
import movieInfoWatcher from './sagas/MovieInfo'
import personageInfoWatcher from './sagas/personageInfo'

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export default configureStore({
  reducer: {
    movies: moviesList,
    movieDetails: movieDetailsInfo,
    personage: characterInfo,
  },
  middleware: getDefaultMiddleware => 
  getDefaultMiddleware({serializableCheck: false}).concat(middleware)
})
///запускає saga
function* rootSaga() {
  yield all([
    fork(movieAllSaga),
    fork(movieInfoWatcher),
    fork(personageInfoWatcher)
  ]);
}
sagaMiddleware.run(rootSaga)