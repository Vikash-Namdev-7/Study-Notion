
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export default function SignupForm({setisLoggedIn}) {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setshowConfirmPassword] = useState(false)
    const [accountType, setAccountType] = useState("student")

    const [formData, setformData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
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
        if(formData.password != formData.confirmPassword) {
            toast.error("Password do not match");
            console.log("Error")
            return;
        }
        setisLoggedIn(true);
        toast.success("Account Created");
        navigate("/Dashboard");
        const data = {
            ...formData
        }
        console.log(formData)
    }

  return (
    <div>
      <div className='flex bg-slate-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button 
        className={`${accountType === "student" 
        ? "bg-slate-950 text-slate-300" 
        : "bg-transparent text-slate-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=> setAccountType("student")}
        >
            Student</button>
        <button 
            className={`${accountType === "instructor" 
                ? "bg-slate-950 text-slate-300" 
                : "bg-transparent text-slate-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("instructor")}>
            Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        
        <div className='flex justify-between mt-[20px]'>
            <label>
                <p className='text-[0.875rem] text-slate-200 mb-1 leading-[1.375]'
                >First Name<sup className='text-pink-200'>*</sup></p>

                <input 
                    required
                    type="text" 
                    name='firstName'
                    value={formData.firstName}
                    placeholder='Enter First Name'
                    onChange={changeHandler}
                    className='bg-slate-800 rounded-[0.5rem] text-slate-200 w-full p-[12px]'

                />
            </label>

            <label>
                <p className='text-[0.875rem] text-slate-200 mb-1 leading-[1.375]'
                >Last Name<sup className='text-pink-200'>*</sup></p>

                <input 
                    required
                    type="text" 
                    name='lastName'
                    value={formData.lastName}
                    placeholder='Enter Last Name'
                    onChange={changeHandler}
                    className='bg-slate-800 rounded-[0.5rem] text-slate-200 w-full p-[12px]'

                />
            </label>
        </div>

        <div className='w-full mt-[20px] '>
        <label>
            <p className='text-[0.875rem] text-slate-200 mb-1 leading-[1.375]'
            >Email<sup className='text-pink-200'>*</sup></p>

            <input 
                required
                type="email" 
                name='email'
                value={formData.email}
                placeholder='Enter Email'
                onChange={changeHandler}
                className='bg-slate-800 rounded-[0.5rem] text-slate-200 w-full p-[12px]'

            />
        </label>
        </div>

         <div className=' flex justify-between mt-[20px]'>
            <label className='relative'>
                <p className='text-[0.875rem] text-slate-200 mb-1 leading-[1.375]'
                >Create Password<sup className='text-pink-200'>*</sup></p>

                <input 
                    required
                    type={showPassword ? ("text") : ("password")} 
                    name='password'
                    value={formData.password}
                    placeholder='Enter Password'
                    onChange={changeHandler}
                    className='bg-slate-800 rounded-[0.5rem] text-slate-200 w-full p-[12px]'

                />
                <span className='absolute right-3 top-[38px] cursor-pointer'

                 onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFBABF'/>) : 
                    (<AiOutlineEye fontSize={24} fill='#AFBABF'/>)}
                </span>
            </label>


            <label className='relative'>
                <p className='text-[0.875rem] text-slate-200 mb-1 leading-[1.375]'
                >Confirm Password<sup className='text-pink-200'>*</sup></p>

                <input 
                    required
                    type={showConfirmPassword ? ("text") : ("password")}  
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    placeholder='Confirm Password'
                    onChange={changeHandler}
                    className='bg-slate-800 rounded-[0.5rem] text-slate-200 w-full p-[12px]'

                />

                <span className='absolute right-3 top-[38px] cursor-pointer'
                 onClick={() => setshowConfirmPassword((prev) => !prev)}>
                    {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFBABF'/>) : 
                    (<AiOutlineEye fontSize={24} fill='#AFBABF'/>)}
                </span>
            </label>
        </div>

        <button className=' w-full bg-yellow-400 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px] mt-5'
        >Create Account</button>
      </form>
    </div>
  )
}