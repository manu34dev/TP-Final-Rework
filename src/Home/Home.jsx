
import React from "react"
import Chat from '../Chat/Chat.jsx'
import { Link } from 'react-router-dom';

const Home = () => {
    
    const logoutHandler = () =>{
        localStorage.clear()
        window.location.reload()
    }

    return(
        <>
            <div>Bienvenido a Manucho´s Messenger</div><br />
            <header>
                <button onClick={logoutHandler}>Cerrar Sesion</button>
            </header>
            <div>
                <Link to='/profile'>Perfil</Link>
                <Chat />
            </div>
        </>
    )
}

export default Home