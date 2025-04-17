
import React from 'react'
import {Navigate} from 'react-router-dom'

export default function PrivateRoyte({isLoggedIn, children}) {
  if(isLoggedIn) {
    return children;
  }
  else {
    return <Navigate to='/login' />
  }
}
