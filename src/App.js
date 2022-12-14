import './index.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import AboutUs from './Pages/AboutUs'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Footer from './components/Footer'
import LostOnesCard from './Pages/LostOnesCard'
import LostOnesDetails from './components/LostOnesDetails'
import NewCommentForm from './Pages/NewCommentForm'
import EditCommentForm from './Pages/EditCommentForm'
import NewListingForm from './Pages/NewListingForm'
import EditListingForm from './Pages/EditListingForm'

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
            <Route path="/listing" element={<LostOnesCard />} />
            <Route
              path="/listing/:id"
              element={
                <LostOnesDetails user={user} authenticated={authenticated} />
              }
            />
            <Route
              path="/new_comment/user/:userId/listing/:listingId"
              element={
                <NewCommentForm user={user} authenticated={authenticated} />
              }
            />
            <Route
              path="/edit_comment/user/:userId/listing/:listingId/comment/:commentId"
              element={
                <EditCommentForm user={user} authenticated={authenticated} />
              }
            />
            <Route path="/listing/new_listing" element={<NewListingForm />} />
            <Route
              path="/listing/:listingId/edit_listing"
              element={<EditListingForm />}
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
        <footer>
          <Footer authenticated={authenticated} user={user} />
        </footer>
      </div>
    </div>
  )
}

export default App
