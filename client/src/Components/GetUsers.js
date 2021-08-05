import React, { useEffect,useState} from 'react'
import {useQuery} from '@apollo/client'
import {LOAD_USERS} from '../GraphQL/Queries'
function GetUsers() {
    const [users,setUsers]=useState([]);
    const {error,loading,data}=useQuery(LOAD_USERS)
    useEffect(()=>{
        if(data)
        setUsers(data.getAllUsers)
    },[data])
   
    return (
        <div>
            {
                users.map((val)=>{
                    return <h1>{val.email}</h1>
                })
            }
        </div>
    )
}

export default GetUsers
