
import React from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import frameImage from '../assets/frame.png'
import {FcGoogle} from 'react-icons/fc'

export default function Template({title,desc1,desc2,image,formType,setisLoggedIn}) {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
            <div className='w-11/12 max-w-[450px]'>
                <h1 className='text-slate-100 font-semibold text-[1.875rem] leading-[2.375rem'> {title} </h1>

                <p className='text=[1.125rem] leading-[1.625rem] mt-4' >
                    <span className='text-slate-200'>{desc1}</span>
                    <br></br>
                    <span className='text-blue-400 italic'>{desc2}</span>
                </p>

                {formType === "signup" ? 
                    (<SignupForm setisLoggedIn={setisLoggedIn} />):
                    (<LoginForm setisLoggedIn={setisLoggedIn} />)}

                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='h-[1px] w-full bg-slate-700'></div>
                    <p className='text-slate-700 font-medium leading-[1.375rem]'>OR</p>
                    <div className='h-[1px] w-full bg-slate-700'></div>
                </div>

                <button className='w-full flex justify-center items-center rounded-[8px] font-medium 
                    border border-slate-700 px-[12px] py-[8px] gap-x-2 mt-6 text-slate-400'>
                    <FcGoogle/>
                    <p>Sign Up With Google</p>
                </button>
            </div>

            <div className='relative w-11/12 max-w-[450px]'> 
                <img
                    src={frameImage}
                    alt='Pattern'
                    height={504}
                    width={490}
                    loading='lazr' />    

                <img
                    src={image}
                    alt='Pattern'
                    height={504}
                    width={558}
                    loading='lazr' 
                    className='absolute -top-4 right-4'
                    />              
            </div>
      
    </div>
  )
}
