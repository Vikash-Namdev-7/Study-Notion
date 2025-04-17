
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom'

export default function LoginForm({setisLoggedIn}) {

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const [formData, setformData] = useState({
        email:"",
        password:""
    })

    function changeHandler(e) {
        setformData((prev)=> (
            {
                ...prev,
                [e.target.name]:e.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        setisLoggedIn(true);
        toast.success("Logged In");
        navigate("/Dashboard");
    }

  return (
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'>
      <label className='w-full'>
        <p className='text-[0.875rem] text-slate-200 mb-1 leading-[1.375]'
        >Email Address <sup className='text-pink-200'>*</sup></p>

        <input 
            required
            type="email"
            value={formData.email}
            name='email' 
            placeholder='Enter Email Address'
            onChange={changeHandler}
            className='bg-slate-800 rounded-[0.5rem] text-slate-200 w-full p-[12px]'
            />
      </label>

      <label className='w-full relative'>
        <p className='text-[0.875rem] text-slate-200 mb-1 leading-[1.375]'
        >Password <sup className='text-pink-200'>*</sup></p>

        <input 
            type={showPassword ? ("text") : ("password")}
            value={formData.password}
            name='password' 
            placeholder='Enter Password'
            onChange={changeHandler}
            className='bg-slate-800 rounded-[0.5rem] text-slate-200 w-full p-[12px]'
            />

        <span 
            className='absolute right-3 top-[38px] cursor-pointer'
            onClick={()=> setShowPassword((prev) => !prev)}>
            {showPassword ? 

            (<AiOutlineEyeInvisible fontSize={24} fill='#AFBABF'/>) :

            (<AiOutlineEye fontSize={24} fill='#AFBABF'/>)}
        </span>

        <Link to='#'>
            <p className='text-xs mt-1 text-blue-300 max-w-max ml-auto'
            >Forgot Password</p>
        </Link>
    </label>

        <button className='bg-yellow-400 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px] mt-5'
        >Sign In</button>

    </form>
  )
}
