import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const logIn = async() =>{
        try{
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/movies');
        } catch (e){
            setError(e.message);
        }
    }

    return (
        <div className='text-center text-jadeGreen-800'>
            <h1 className='text-3xl'>Login Page</h1>
            {error && <p>{error}</p>}
            <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>Username:</label>
                <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='your email address'
                value={email}
                onChange={e => setEmail(e.target.value)}   
                />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>Password:</label>
                <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                type="password"
                placeholder='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div><button className="px-2 border bg-jadeGreen-900 hover:bg-cobaltBlue-800 font-bold rounded text-jadeGreen-700" onClick={logIn}>Log In</button></div>
            <Link to="/create-account" className='hover:bg-cobaltBlue-800'>Dont have an account? Create one here</Link>
        </div>
     )
}

export default LoginPage