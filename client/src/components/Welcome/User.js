import React from 'react'
import { useAuth } from '../Auth/AuthProvider'
const User = () => {
    const { auth, login } = useAuth()   
    return (
         auth.user.toString() 
    )
}
export default User