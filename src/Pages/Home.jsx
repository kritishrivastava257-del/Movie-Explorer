import { useState, useEffect } from "react";
import { getTrendingMovies } from "../services/apiService";
import { Link } from "react-router-dom";

function Home() {
  let [movies, setMovies] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    getTrendingMovies().then((data)=>{
        console.log(data)
        setMovies(data.slice(0,4))
    }).catch((error)=> console.log(error)).finally(()=>setLoading(false))
  }, []);

  if(loading){
    return <h2 className="p-4">Loading Movies......</h2>
  }
  return (
     <div className="p-6">
      <div className="bg-gray-900 text-white p-10 rounded-xl shadow-lg ">
        <h1 className="text-3xl font-bold">Welcome To Movie Explorer</h1>
        <p className="mt-3">Discover Trending and Popular Movies</p>
        <Link
          to="/movies"
          className="bg-red-600 inline-block mt-5 px-4 py-2 rounded-md font-semibold"
        >
          Explore Movies
        </Link>
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-7 mb-5 text-center text-blue-300 text-shadow-lg text-shadow-blue-700 animate-pulse">
          {" "}
          Trending Movies
        </h2>

        <div className="grid grid-cols-4 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="shadow-lg  rounded-xl p-4 ">
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
              />
              <h3 className="font-semibold mt-3 text-xl text-center">
                {movie.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
