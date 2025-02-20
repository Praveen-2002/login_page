import {Navigate, Outlet } from 'react-router-dom'
import { SERVER_URL } from '../config/env'
import { useEffect, useState } from 'react'
import Loading from './Loading'

export default  function  AutherizedComponents () {
    let [isValid, setIsValid] = useState(false)
    let [loading, setloading] = useState(true)

    useEffect(()=>{
        validateUser();
    },[])

    async function validateUser(){
        try{
            let res = await fetch(`${SERVER_URL}/api/auth/validateUser`,{
                method: 'get',
                credentials: 'include'
            })
            let data = await res.json()
            data.success ?
                setIsValid(true) : setIsValid(false)
        }
        catch(err){
            setIsValid(false)
        }
        setloading(false)
    }
    
    if(loading){return <Loading/>}
    return isValid ? <Outlet/> : <Navigate to='/login' replace/>
}