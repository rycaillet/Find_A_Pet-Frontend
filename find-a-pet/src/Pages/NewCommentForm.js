import React from 'react'
import { CreateComment } from '../services/Auth'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const NewCommentForm = ({ user, authenticated }) => {
  let navigate = useNavigate()
  let { listingId } = useParams()
  let { userId } = useParams()

  const initialState = {
    userId: userId,
    listingId: listingId,
    comment: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await CreateComment({ ...formState })
    navigate(`/listing/${listingId}`)
  }

  return (
    <div className="center">
      <h1>Write A New Comment</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputbox">
          {/* <label htmlFor="comment">
            Write A New Comment
          </label> */}
          <input
            type="description"
            id="comment"
            cols="55"
            rows="10"
            onChange={handleChange}
            value={formState.comment}
            required
            placeholder="Anything helps... thank you!"
            className="input"
          />
        </div>
        <button
          id="form-button"
          onClick={() => navigate(`/listing/${listingId}`)}
        >
          Go Back
        </button>
        <button type="submit" id="form-button">
          Submit
        </button>
        {/* <input type="button" value="submit" /> */}
      </form>
    </div>
  )
}

export default NewCommentForm
