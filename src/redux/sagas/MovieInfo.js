import { call, put, takeEvery } from "redux-saga/effects";
import { instance, moviesPersonageAPI } from "../../Service/ApiService";
import { getPersonagesInfo, setMovieDetails, setPersonageLinks } from "../movieDetailsInfo";

function* movieInfoSaga({payload: id}){
    try{
        const res = yield call(() => instance.get(`films/`, id))
        let data = res.data.results[id-1]
        yield put(setMovieDetails(data))        
        yield put(setPersonageLinks(data.characters))
    } catch (error) {
        console.log(error)
    }
}
function* setPersonageSaga({payload: id}) {
    try{
        const response = yield call(moviesPersonageAPI, id)
        yield put(getPersonagesInfo(response.map(i => i.data)))
    } catch(error) {
        console.log(error)
    }
}

function* movieInfoWatcher() {
    yield takeEvery('movieDetails/movieDetailsLoading', movieInfoSaga)
    yield takeEvery('movieDetails/personagesInfoLoading', setPersonageSaga)
}
export default movieInfoWatcher