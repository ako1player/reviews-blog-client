import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {getAuth, signOut} from 'firebase/auth';
import useUser from "./hooks/useUser";

const Navbar = () =>{
    const [toggle, setToggle] = useState(false);
    const {user} = useUser();
    const navigate = useNavigate();
    return(
        <nav className="px-2 sm:px-4 py-2.5 bg-red-500" >
            <div className="container flex flex-wrap items-center justify-end mx-auto">
            <button onClick={()=> setToggle(!toggle)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden bg-gray-100" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            {!toggle ?
                //Desktop Display
                <div className="hidden md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li className="hover:bg-slate-100 rounded py-2 px-4">
                            <Link to="/" className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0" aria-current="page">Home</Link>
                        </li>
                        <li className="hover:bg-slate-100 rounded py-2 px-4">
                            <Link to="/anime" className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0">Anime</Link>
                        </li>
                        <li className="hover:bg-slate-100 rounded py-2 px-4">
                            <Link to="/movies" className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0">Movies</Link>
                        </li>
                        <li>
                        {user ?
                        <button className="font-bold rounded py-2 px-4 bg-slate-100 hover:bg-slate-300" 
                        onClick={() =>{
                            signOut(getAuth());
                        }}>Log Out</button>
                        : <button className="font-bold rounded py-2 px-4 bg-slate-100 hover:bg-slate-300" 
                        onClick={()=> navigate('/login')}>Log In</button>
                        }
                        </li>
                    </ul>
                </div> :
                //Mobile display
                <div className="w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col p-4 border rounded md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li className="hover:bg-slate-100">
                       <Link to="/" className="py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0" aria-current="page">Home</Link> 
                    </li>
                    <li className="hover:bg-slate-100">
                        <Link to="/anime" className="py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0">Anime</Link>
                    </li>
                    <li className="hover:bg-slate-100">
                        <Link to="/movies" className="py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0">Movies</Link>
                    </li>
                    <li>
                    {user ?
                    <button className="block px-2 border bg-slate-100 font-bold rounded "
                    onClick={() =>{
                        signOut(getAuth());
                    }}>Log Out</button>
                    : <button className="block px-2 border bg-slate-100  font-bold  rounded " onClick={()=> navigate('/login')}>Log In</button>
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