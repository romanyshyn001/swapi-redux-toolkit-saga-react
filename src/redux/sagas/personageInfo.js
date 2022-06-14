import { call, takeEvery, put } from "redux-saga/effects";
import { instance, personageDetailAPI, personageMoviesAPI } from "../../Service/ApiService";
import { characterFilms, characterFilmsLinks, getCharacterInfo, getFilmsInfo, setFilmsInfo } from "../characterInfo";

function* personageInfoSaga({payload: id}){
   try{
        const res = yield call(personageDetailAPI, id)
        let data = res.data
        yield put(getCharacterInfo(data))
        yield put(characterFilmsLinks(data.films))

   } catch(error) {
        console.log(error)
   }
}
function* filmsInfoSaga({payload: id}){
    const res = yield call(personageMoviesAPI, id)
    console.log('res',res)

    //yield put(getFilmsInfo(res.map(i => i.data)))
}

function* personageInfoWatcher(){
    yield takeEvery('personageInfo/characterInfoLoading', personageInfoSaga)
    //yield takeEvery('personageInfo/setFilmsInfoLoading', filmsInfoSaga)
}
export default personageInfoWatcher