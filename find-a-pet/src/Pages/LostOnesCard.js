import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { DestroyListing } from '../services/Auth'
// import LostOnesDetails from '../components/LostOnesDetails'
// import { Link } from 'react-router-dom'

const Base_URL = 'http://localhost:3001/api'

const LostOnesCard = () => {
  let { id } = useParams()
  const navigate = useNavigate()

  const [lostOnes, setLostOnes] = useState([])

  const getLostOnes = async () => {
    const response = await axios.get(`${Base_URL}/listing`)
    setLostOnes(response.data)
  }

  useEffect(() => {
    getLostOnes()
  }, [])

  return (
    <div className="lostOne-container">
      <header className="lostOne-header">
        <h1>Lost Ones</h1>
      </header>
      <button
        id="view-pet-button"
        onClick={() => navigate(`/listing/new_listing`)}
      >
        Add Your Pet
      </button>
      <main className="lostOne-main">
        {lostOnes?.map((lostOne) => (
          <div className="lostOne-card" key={lostOne.id}>
            <h2 id="lostOne-name">{lostOne.petName}</h2>
            <button
              id="view-pet-button"
              onClick={() => navigate(`/listing/${lostOne.id}`)}
            >
              View Pet
            </button>
            <img src={lostOne.petImage} alt="lostOne" id="lostOne-pic"></img>
          </div>
        ))}
      </main>
    </div>
  )
}

export default LostOnesCard
