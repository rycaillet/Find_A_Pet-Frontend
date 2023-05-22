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
      <p>*scroll to see Reunited Loved Ones</p>
      <div className="gallery">
        <img
          src="https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="frenchie"
        />
        <img
          src="https://images.pexels.com/photos/8734473/pexels-photo-8734473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="dogs-reunited"
        />
        <img
          src="https://images.pexels.com/photos/8498519/pexels-photo-8498519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="dogs-reunited2"
        />
        <img
          src="https://images.pexels.com/photos/1959052/pexels-photo-1959052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="dogs-on-fence"
        />
        <img
          src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cat-photo"
        />
        <img
          src="https://images.pexels.com/photos/7107434/pexels-photo-7107434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="pitbulls-photo"
        />
        <img
          src="https://images.pexels.com/photos/3631659/pexels-photo-3631659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="two-small-dogs-photo"
        />
        <img
          src="https://images.pexels.com/photos/6864011/pexels-photo-6864011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="black-cat-photo"
        />
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
