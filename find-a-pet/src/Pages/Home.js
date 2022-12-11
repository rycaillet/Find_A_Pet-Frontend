import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ user, authenticated }) => {
  const navigate = useNavigate()
  return user && authenticated ? (
    <div>
      <header id="showcase">
        <h1>Welcome to Find A Pet!</h1>
        <p>
          There are pets all over the world who are lost and starving waiting to
          be found...
        </p>
        <p>
          My hope is to be able to help as many lost pets as I can. With your
          help of course.
        </p>
        <p>
          If you click on Lost Ones, you should be able to see a listing of pets
        </p>
        <p>who are currently lost and your comment could help save them</p>
        <button id="read-me-button" onClick={() => navigate('/about_us')}>
          Read More
        </button>
      </header>
      <h2 id="reunited">Reunited Loved Ones</h2>
      <div className="gallery">
        <img src="./images/frenchie-pic.png" alt="frenchie" />
        <img src="./images/dogs-reunited.png" alt="dogs-reunited" />
        <img src="./images/dogs-reunited2.png" alt="dogs-reunited2" />
        <img src="./images/dogs-on-fence.png" alt="dogs-on-fence" />
        <img src="./images/cat-photo.png" alt="cat-photo" />
        <img src="./images/two-pitbulls.png" alt="pitbulls-photo" />
      </div>
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
