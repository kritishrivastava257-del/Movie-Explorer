import Axios from "axios";

let API_KEY = import.meta.env.VITE_API_KEY;
let BASE_URL = import.meta.env.VITE_BASE_URL;

//TRENDING MOVIES

export const getTrendingMovies = async () => {
  try {
    const res = await Axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`,
    );
    return res.data.results
  } catch (error) {
    console.log(error, "Error in Fetching Movies..");
  }
};

//Popular Movies

export const getPopularMovies = async(page=1)=>{
  try{
    const res = await Axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    ) 
  console.log(res.data.results);
  return res.data.results

 }catch(error){
  console.log(error,"Error in fetching Movies");
  
 }
}

//Single Movie Details

export const getMovieDetails = async (id) => {
  try {
    const res = await Axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
    );
    return res.data;
  } catch (error) {
    console.log(error, "Error in fetching Movies");
  }
};
