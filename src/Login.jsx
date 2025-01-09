import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = async () => {
        try{
        const res = await axios.post('http://localhost:3000/login', {
            "emailId": email,
            "password": password
        }, {withCredentials: true});

        console.log(res.data);
        dispatch(addUser(res.data.data));
      } catch(err)
      {
        console.log(`Error ${err}`);
      }
    }

  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className="card bg-base-300 w-96 shadow-xl mx-8">
            <div className="card-body">
                <h2 className="card-title justify-center">Login</h2>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Email Id</span>
                    </div>
                    <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" onChange={ handleEmailChange } value = {email}/>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Password</span>
                    </div>
                    <input type="text" placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs" onChange={ handlePasswordChange } value = {password} />
                </label>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick = {handleLogin}>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login