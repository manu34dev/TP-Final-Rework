import React, { useState } from 'react';

const Login = function() {
    const [username, setUsername] = useState('');
    const [usermail, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        localStorage.setItem('username', username);
        localStorage.setItem('email', usermail);
        localStorage.setItem('password', password);
        window.location.replace("/");
    }

    return (
        <>
            <h3 className="h3 mb-3 fw-normal">Iniciar Sesión</h3>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" onChange={(e) => setUsername(e.target.value)} placeholder="Juan Gutierrez" />
                <label htmlFor="floatingInput">Nombre</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
                <button onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}

export default Login