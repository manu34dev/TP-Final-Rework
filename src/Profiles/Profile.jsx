 import React from "react";
 import { Link } from 'react-router-dom';

const Profile = () =>{
    const name = localStorage.getItem('username')
    const mail = localStorage.getItem('email')
    return(
    <div>
        <div>
        <Link to='/'>Volver al Home</Link>
        </div>
        <p className="UserInfo" >{name}</p>
        <p className="LoginData">{mail}</p>
    </div>
    )
}

export default Profile 