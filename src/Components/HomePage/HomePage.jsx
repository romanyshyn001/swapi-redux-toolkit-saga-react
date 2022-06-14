import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesFetch } from "../../redux/films";
import FilmContainer from "./MovieContainer";

const HomePage = () => {
  const { list, isLoading } = useSelector(state => state.movies)  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(moviesFetch())
  }, [dispatch])
  
  return(
     <FilmContainer list={list} isLoading={isLoading} />
  )
}
export default HomePage















