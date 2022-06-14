import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import { useDispatch, useSelector } from "react-redux";
import { movieDetailsFetch } from '../../redux/films';
import { movieDetailsLoading } from '../../redux/movieDetailsInfo';


const MovieContainer = () => {

  const { filmDetails } = useSelector(state => state.movieDetails)
  const dispatch = useDispatch()
  const params = useParams()
  
  
  useEffect(() => {
     //dispatch(movieDetailsFetch(params.movieId))
    dispatch(movieDetailsLoading(params.movieId))
  }, [dispatch, params.movieId])
// console.log('filmDetails =>', filmDetails)
  
return (
    <div>
      <MovieDetails  
        movieInfo={filmDetails}
      />
    </div>
  )
}
export default MovieContainer


