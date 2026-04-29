import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MovieDetails from "./Pages/MovieDetails";
import Favourite from "./Pages/Favourite";
import Error from "./Pages/Error";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify"

const App=()=>{
  return(
    <BrowserRouter>
    <ToastContainer/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/movies-details" element={<MovieDetails/>}/>
      <Route path="/fav" element={<Favourite/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;