import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getCharacterInfo, setFilmsInfoLoading } from "../../redux/slices/characterInfo"
import PersonagePage from "./PersonagePage"

const PersonageContainer = () => {
    const { personageFilmLinks } = useSelector(state => state.personage)
    const { characters } = useSelector(state => state.movieDetails)

    const params = useParams()    
    const dispatch = useDispatch()


useEffect(() => {
    const personDetails = () => {
        return characters.map((perId, id) => {     
          if(Number(perId.url.match(/\d+/g)) === 
          Number(params.perId)){ 
            dispatch(getCharacterInfo(perId)) }
            return 1
          })
        }
    personDetails()

    dispatch(setFilmsInfoLoading(personageFilmLinks))
}, [dispatch, characters, params, personageFilmLinks])

return <PersonagePage />
}

export default PersonageContainer

