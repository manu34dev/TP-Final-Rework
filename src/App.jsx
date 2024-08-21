import './App.css'
import Login from './login/Login.jsx'
import Chat from './Chat/Chat.jsx'
function App() {
  const logoutHandler = () =>{
    localStorage.clear()
    window.location.reload()
  }
  const user = localStorage.getItem('username')

  return (
    <>
      { !user && <Login />}
      { user && 
          
          <>
            <div>Bienvenido a Manucho´s Messenger</div><br />
            <header>
              <button onClick={logoutHandler}>Cerrar Sesion</button>
            </header>
            <div>
              <Chat />
            </div>
          </>
      }
    </>
  )
}

export default App
