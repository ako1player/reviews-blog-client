import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccountPage = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const createAccount = async() =>{
        try{
            if(password !== confirmPassword){
                setError("Password and Confirm Password do not match");
                return;
            } 
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/movies');
        } catch (e){
            setError(e.message);
        }
    }

    return(
        <div className="text-center text-jadeGreen-800">
            <h1 className="text-3xl">Create Account</h1>
            {error && <p>{error}</p>}
            <div className="mb-4">
                <label className='block text-gray-700 font-bold mb-2'>Email:</label>
                <input 
                className="className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'"
                placeholder='your email address'
                value={email}
                onChange={e => setEmail(e.target.value)}   
                />
            </div>
            <div className="mb-4">
                <label className='block text-gray-700 font-bold mb-2'>Password:</label>
                <input 
                className="className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'" 
                type="password"
                placeholder='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className='block text-gray-700 font-bold mb-2'>Confirm Password:</label>
                <input 
                className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type="password"
                placeholder='re enter your password'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                />
            </div>
            <div>
                <button 
                className="px-2 border bg-jadeGreen-900 hover:bg-cobaltBlue-800 font-bold rounded text-jadeGreen-700" 
                onClick={createAccount}>Create Account</button>
            </div>   
            <Link to="/login" className='hover:bg-cobaltBlue-800'>Already have an account? Log in here</Link>
        </div>
    )
}

export default CreateAccountPage;