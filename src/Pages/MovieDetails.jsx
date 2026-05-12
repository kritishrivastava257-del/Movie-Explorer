import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/apiService";
import { addToFav, removeFromFav, isFav } from "../components/fav";
import { toast } from "react-toastify";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [fav, setFav] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  const fetchMovieDetails = async () => {
    try {
      setLoading(true);

      const data = await getMovieDetails(id);

      setMovie(data);

      setFav(isFav(data.id));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFav = () => {
    if (fav) {
      removeFromFav(movie.id);
      setFav(false);
      toast.error("Removed from Favorites");
    } else {
      addToFav(movie);
      setFav(true);
      toast.success("Added to Favorites");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl font-bold animate-pulse">
          Loading Movie Details...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden md:flex">
        
        {/* Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 object-cover"
        />

        {/* Details */}
        <div className="p-6 flex-1">
          <h1 className="text-4xl font-bold mb-4">
            {movie.title}
          </h1>

          <p className="text-gray-700 mb-4">
            {movie.overview}
          </p>

          <p className="text-lg font-semibold mb-2">
            ⭐ Rating: {movie.vote_average}
          </p>

          <p className="text-lg font-semibold mb-4">
            📅 Release Date: {movie.release_date}
          </p>

          <button
            onClick={handleFav}
            className={`px-6 py-3 rounded-xl font-semibold transition ${
              fav
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {fav ? "Remove from Favorites ❤️" : "Add to Favorites 🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
