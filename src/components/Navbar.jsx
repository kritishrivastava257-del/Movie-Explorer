import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="bg-black text-white shadow-md">
        <div className="maz-w-7xl px-4 sm:px-6 lg:px-8">
         <div className="flex justify-between items-center h-16">
            <Link to= "#" className="text-2xl font-bold text-blue-500 hover:text-blue-400">Movie Explorer</Link>
         <div className="flex space-x-6">
            <Link to="/" className="hover:text-blue-500 font-bold">
            Home
            </Link>
              <Link to="/movies" className="hover:text-blue-500 font-bold">
            Movies
            </Link>
              <Link to="/fav" className="hover:text-blue-500 font-bold">
            Favourites
            </Link>
         </div>
         </div>
        </div>
        </nav>
    )
}

export default Navbar;