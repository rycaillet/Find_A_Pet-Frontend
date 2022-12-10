import './index.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import AboutUs from './Pages/AboutUs'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Home from './Pages/Home'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <div>
        <header>
          <Nav
            authenticated={authenticated}
            user={user}
            handleLogOut={handleLogOut}
          />
        </header>
        <main>
          <Routes>
            <Route
              index
              element={<Home user={user} authenticated={authenticated} />}
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={
                <Login
                  setUser={setUser}
                  toggleAuthenticated={toggleAuthenticated}
                />
              }
            />
            <Route path="/about_us" element={<AboutUs />} />
          </Routes>
        </main>
        <footer>{/* <Footer /> */}</footer>
      </div>
    </div>
  )
}

export default App
