import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {isUserValid} from './authHandler'

export default function Home(){
    const navigate = useNavigate();
    const [validUser, setvalidUser] = useState(false);
    useEffect(()=>{
        updateUserStatus()
    },[])

    const updateUserStatus = async() =>{
        let res_json = await isUserValid();
        console.log(res_json)
        if (!res_json.success){
            navigate("/login")
            return 
        }
        setvalidUser(true)
    }

    return(
        <div className="m-5 p-5 item-center">
        {
        validUser &&
            <h3>login In success</h3>
        }
        </div>
    )
}