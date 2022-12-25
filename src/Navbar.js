import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {getAuth, signOut} from 'firebase/auth';
import useUser from "./hooks/useUser";

const Navbar = () =>{
    const [toggle, setToggle] = useState(false);
    const {user} = useUser();
    const navigate = useNavigate();
    return(
        <nav className="px-2 sm:px-4 py-2.5 rounded" >
            <div className="container flex flex-wrap items-center justify-between mx-auto">
            <button onClick={()=> setToggle(!toggle)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-jadeGreen-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            {!toggle ?
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-jadeGreen-800 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                            <Link to="/" className="block hover:text-jadeGreen-700 py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-jadeGreen-800" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/anime" className="block hover:text-jadeGreen-700 py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-jadeGreen-800">Anime</Link>
                        </li>
                        <li>
                            <Link to="/movies" className="block hover:text-jadeGreen-700 py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-jadeGreen-800">Movies</Link>
                        </li>
                        <li>
                        {user ?
                        <button className="block px-2 border bg-jadeGreen-900 hover:bg-cobaltBlue-800 font-bold rounded text-jadeGreen-700" 
                        onClick={() =>{
                            signOut(getAuth());
                        }}>Log Out</button>
                        : <button className="block px-2 border bg-jadeGreen-900 hover:bg-cobaltBlue-800 font-bold rounded text-jadeGreen-700" 
                        onClick={()=> navigate('/login')}>Log In</button>
                        }
                        </li>
                    </ul>
                </div> :
                <div className="w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col p-4 mt-4 border border-jadeGreen-800 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li>
                       <Link to="/" className="block hover:bg-cobaltBlue-800 py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-jadeGreen-800" aria-current="page">Home</Link> 
                    </li>
                    <li>
                        <Link to="/anime" className="block hover:bg-cobaltBlue-800 py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-jadeGreen-800">Anime</Link>
                    </li>
                    <li>
                        <Link to="/movies" className="block hover:bg-cobaltBlue-800 py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-jadeGreen-800">Movies</Link>
                    </li>
                    <li>
                    {user ?
                    <button className="block px-2 border bg-jadeGreen-900 hover:bg-cobaltBlue-800 font-bold rounded text-jadeGreen-700"
                    onClick={() =>{
                        signOut(getAuth());
                    }}>Log Out</button>
                    : <button className="block px-2 border bg-jadeGreen-900 hover:bg-cobaltBlue-800 font-bold  rounded text-jadeGreen-700" onClick={()=> navigate('/login')}>Log In</button>
                    }
                    </li>
                </ul>
            </div>
            }
            </div>
        </nav>
    )
}

export default Navbar