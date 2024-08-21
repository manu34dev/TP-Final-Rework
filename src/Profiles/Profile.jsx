 import React from "react";

const Profile = () =>{
    const name = localStorage.getItem('username')
    const mail = localStorage.getItem('email')
    return(
    <div>
        <p className="UserInfo" >{name}</p>
        <p className="LoginData">{mail}</p>
    </div>
    )
}

export default Profile 