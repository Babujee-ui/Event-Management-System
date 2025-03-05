import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export default function ReqAuth(props) {
    const auth=useAuth()
    const navigate =useNavigate()
    if(!auth.user){
        return(navigate('/login'))
    }
  return (props.children)
}
