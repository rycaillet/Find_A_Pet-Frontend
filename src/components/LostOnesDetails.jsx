import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Comments from './Comments'
import { DestroyListing } from '../services/Auth'
import { BASE_URL } from '../globals'

const LostOnesDetails = ({user}) => {
  let navigate = useNavigate()
  let { id } = useParams()

  const [lostOne, setLostOne] = useState([])

  const getLostOnesById = async () => {
    const response = await axios.get(`${BASE_URL}/listing/${id}`)
    setLostOne(response.data)
  }

  const handleDelete = async () => {
        await DestroyListing({ id })
        setLostOne()
        navigate('/listing')
      }

  const [comments, setComments] = useState(null)

  const getComments = async () => {
    const response = await axios.get(`${BASE_URL}/comment/`)
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
        <button onClick={handleDelete} id="delete-edit-button1">
              Delete Listing
            </button> 
    <main className='details-main'>
        <div className='details-card'>
          <h2 className='details-name'><span className='details-title'>Name:&nbsp;</span> {lostOne.petName}</h2>
          <img src={lostOne.petImage} alt='pet-image' id='details-pic'></img>
          <h3><span className='details-title'>Description:</span> &nbsp;{lostOne.description}</h3>
          <h3><span className='details-title'>Sex:</span>&nbsp;{lostOne.sex}</h3>
          <h3><span className='details-title'>Species:</span> &nbsp;{lostOne.species}</h3>
          <h3><span className='details-title'>Last Seen:</span> &nbsp;{lostOne.lastSeen}</h3>
          <div>
          <button
              id="view-pet-button"
              onClick={() => navigate(`/listing`)}
            >
              Go Back
            </button>
            <button
              id="view-pet-button"
              onClick={() => navigate(`/listing/${id}/edit_listing`)}
            >
              Edit Info
            </button>
            </div>
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
            >
            Add A Comment
        </button>
    </div>
        
  )
}

export default LostOnesDetails