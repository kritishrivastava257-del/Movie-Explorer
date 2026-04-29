import React from "react";
import { getMovieDetails } from "../services/apiService";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { addToFav,removeFromFav,isFav } from "../components/fav";
import { toast } from "react-toastify";

function MovieDetails() {

    const {id} = useParams()
    const [movie,setMovie] =useState(null);
    const [fav,setFav]= useState(false)
    return(
        <div>
            <h1>Movie Detail</h1>
        </div>
    )
}
export default MovieDetails;
