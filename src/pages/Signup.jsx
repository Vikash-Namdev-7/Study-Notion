
import React from 'react'
import Template from '../components/Template'
import signupImage from '../assets/signup.png'

export default function Signup({setisLoggedIn}) {
  return (
    <div>
      <Template 
        title="Join the millions learning to code with Study Notion for free"
        desc1="Build skills for today, tomorrow and beyond."
        desc2="Education to future-proof your career."
        image={signupImage}
        formType="signup"
        setisLoggedIn={setisLoggedIn}
      />
    </div>
  )
}
