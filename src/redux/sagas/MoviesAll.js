import { takeEvery, put, call, takeLatest } from 'redux-saga/effects'
import { moviesPersonageAPI, getSagaMovieByIdAPI, instance, personageDetailAPI } from '../../Service/ApiService'
import { getCharacterDetails,  getMovieDetails, getPersonages, getPersonByLink, moviesAll } from '../films'
import { setMovieDetails } from '../movieDetailsInfo'

function* moviesAllSaga(){
    try {
        const movieInfo = yield call(() => instance.get('films'))        
        yield put(moviesAll(movieInfo.data.results))
    } catch(error) {
        console.log(error)
    }
}

// function* movieDetailsSaga({payload: id}) {
//     try{
//         const response = yield call(() => instance.get('films/'), id )
//         let data = response.data.results[id-1]
//         yield put(getMovieDetails(data))
//         yield put(getPersonByLink(data.characters))
//     } catch(error) {
//         console.log(error)
//     }
// }

// function* setPersonageSaga({payload: id}) {
//     try{
//         const response = yield call(moviesPersonageAPI, id)
//         yield put(getPersonages(response.map(i => i.data)))
//     } catch(error) {
//         console.log(error)
//     }
// }
//.......ERROR........//
// function* characterInfoSaga({payload: id}){
//     try{
//         const res = yield call(personageDetailAPI, id)
//         yield put(getCharacterDetails(res.data))
//     } catch(error){
//         console.log(error)
//     }
// }

function* movieAllSaga(){
    yield takeEvery('movies/moviesFetch', moviesAllSaga)
//замінив
   // yield takeEvery('movies/movieDetailsFetch', movieDetailsSaga)
    // yield takeEvery('movies/personagesFetch', setPersonageSaga)
    // yield takeEvery('movies/characterInfoFetch', characterInfoSaga)
}
export default movieAllSaga

