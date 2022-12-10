import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (user, authenticated) => {
  const navigate = useNavigate()
  return user && authenticated ? (
    <div>
      <header id="showcase">
        <h1>
          Welcome to Find A Pet!
          {/* <img
            src="/images/Find_A_Pet-logo1.png"
            alt="website logo"
            id="home-logo"
          /> */}
        </h1>
        <p>
          There are pets all over the world who are lost and starving waiting to
          be found...
        </p>
        <p>
          My hope is to be able to help as many lost pets as I can. With your
          help of course.
        </p>
        <p>
          If you click on Find A Pet, you should be able to see a listing of
          pets who are currently lost and your comment could help save them
        </p>
        <button id="read-me-button" onClick={() => navigate('/about_us')}>
          Read More
        </button>
      </header>
    </div>
  ) : (
    <div className="protected">
      <h3 className="please-signin">
        Oops! You must be logged in to have access to the community!
      </h3>
      <button className="form-button" onClick={() => navigate('/login')}>
        Login
      </button>
    </div>
  )
}

export default Home
