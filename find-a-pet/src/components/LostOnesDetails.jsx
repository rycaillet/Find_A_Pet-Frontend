import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Comments from '../components/Comments'

const Base_URL = 'http://localhost:3001/api'

const LostOnesDetails = ({user}) => {
  let navigate = useNavigate()
  let { id } = useParams()

  const [lostOne, setLostOne] = useState([])

  const getLostOnesById = async () => {
    const response = await axios.get(`${Base_URL}/listing/${id}`)
    // console.log(response.data)
    setLostOne(response.data)
  }

  const [comments, setComments] = useState(null)

  const getComments = async () => {
    const response = await axios.get(`${Base_URL}/comment/`)
    setComments(response.data)
  }

  useEffect(() => {
    getLostOnesById()
    getComments()
  }, [])

  return (
    <div className="details-container">
        <header className='details-header'>
            <h1>Lost One</h1>
        </header>
    <main className='details-main'>
        <div className='details-card'>
          <h2 className='details-name'><span className='details-title'>Name:&nbsp;</span> {lostOne.petName}</h2>
          <img src={lostOne.petImage} alt='pet-image' id='details-pic'></img>
          <h3><span className='details-title'>Description:</span> &nbsp;{lostOne.description}</h3>
          <h3><span className='details-title'>Sex:</span>&nbsp;{lostOne.sex}</h3>
          <h3><span className='details-title'>Species:</span> &nbsp;{lostOne.species}</h3>
          <h3><span className='details-title'>Last Seen:</span> &nbsp;{lostOne.lastSeen}</h3>
          <button
              id="view-pet-button"
              onClick={() => navigate(`/listing`)}
            >
              Go Back
            </button>
        </div>
    </main>
    <header className='comment-header'>
    <h1 className=''>Comments</h1>
    </header>
      <section>
        {comments?.map((comment) => (
            <Comments
            id={comment?.id}
            key={comment?.id}
            userId={comment?.userId}
            listingId={comment?.listingId}
            comment={comment?.comment}
            getComments={getComments}
            />
            ))}
      </section>
        <button
            id="view-pet-button"
            onClick={() => navigate(`/new_comment/user/${user.id}/listing/${id}`)}
            // onClick={() => navigate(`/new_comment`)}
            >
            Add A Comment
        </button>
    </div>
        
  )
}

export default LostOnesDetails