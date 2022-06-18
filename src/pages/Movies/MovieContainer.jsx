import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import MovieDetails from './MoviePage';
import { movieDetailsLoading } from '../../redux/slices/movieDetailsInfo';

const MovieContainer = () => {

  const { filmDetails } = useSelector(state => state.movieDetails)
  const dispatch = useDispatch()
  const params = useParams()
  
  
  useEffect(() => {
    dispatch(movieDetailsLoading(params.movieId))
  }, [dispatch, params.movieId])
  
return (
    <div>
      <MovieDetails
        movieInfo={filmDetails}
      />
    </div>
  )
}
export default MovieContainer


