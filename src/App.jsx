import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Login from './login/Login.jsx'
import Home from './Home/Home.jsx'
import Profile from './Profiles/Profile.jsx'
import './App.css'

function App() {
  const user = localStorage.getItem('username')

  return (
    <>
      <BrowserRouter>
          {/* { user && <Link to='/profile'>Perfil</Link> } */}
          <Routes>
              <Route path='/' element={user ? <Home/> : <Login/> } />
              <Route path='/profile' element={<Profile/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
