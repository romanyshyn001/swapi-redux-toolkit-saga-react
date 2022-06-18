import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesLoading } from "../../redux/slices/films";
import FilmContainer from "./HomePage";

const HomePageContainer = () => {
  const { list, isLoading } = useSelector(state => state.movies)  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(moviesLoading())
  }, [dispatch])
  
  return(
     <FilmContainer list={list} isLoading={isLoading} />
  )
}
export default HomePageContainer















