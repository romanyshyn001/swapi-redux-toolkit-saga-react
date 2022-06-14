import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useParams } from "react-router-dom"
import { characterFilmsLoading, characterInfoLoading, getFilmsInfo, setFilmsInfoLoading } from "../../redux/characterInfo"
import style from './style.module.css'

const PersonageContainer = () => {

const { characters } = useSelector(state => state.movieDetails)
const { personageDetails, personageFilmLinks, filmsInfo } = useSelector(state => state.personage)

const params = useParams()    
const dispatch = useDispatch()
let url = 'https://swapi.dev/api/people/1'
useEffect(() => {
    const personDetails = () => {
        characters.map((perId) => {     
            if(Number(perId.url.match(/\d+/g)) === 
              Number(params.perId)){ 
                  dispatch(characterInfoLoading(perId.url))
                return perId.url
                }
                  return 1
              })
    }
    personDetails()
}, [dispatch])
console.log('personageDetails', personageDetails)
    return(
            <div>
  
                <div className={style.container}>
                    <li><span>Name: </span>{personageDetails.name}</li>
                    <li><span>Birth: </span>{personageDetails.birth_year}</li>
                    <li><span>Eye color: </span>{personageDetails.eye_color}</li>
                    <li><span>Gender: </span>{personageDetails.gender}</li>
                    <li><span>Hair color: </span>{personageDetails.hair_color}</li>
                    <li><span>Height: </span>{personageDetails.height}</li>
                    <li><span>Mass: </span>{personageDetails.mass}</li>
                    <li><span>Skin color: </span>{personageDetails.skin_color}</li>
                    <li><span>Films:</span></li>
    
                    {/* <div>{personageFilms.map((f, id) => 
                            
                    <NavLink key={id} to={`../.././movies/${f.url.match(/\d+/g)}`}>
                            <div >
                                <li><span>Movie name: </span>{f.title}</li>
                            </div>    
                    </NavLink>
                            )}
                        </div> */}

                </div>

        </div>
    )
}

export default PersonageContainer

