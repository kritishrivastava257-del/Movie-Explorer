export const getFav = ()=> JSON.parse(localStorage.getItem("FavMovie"))|| [];

export const addToFav =(movie) =>{
    const  favs = getFav();
    localStorage.setItem("FavMovie",JSON.stringify([...favs,movie]));

}

export const removeFromFav =(id)=>{
    const favs = getFav();
    const updateMovie = favs.filter((m)=> m.id!=id);
    localStorage.setItem("FavMovie",JSON.stringify(updateMovie));

}

export const isFav=(id)=>{
    const favs = getFav();
    return favs.some((m)=> m.id===id)
}