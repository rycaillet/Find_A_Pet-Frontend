import React from 'react'
import { UpdateComment } from '../services/Auth'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const EditCommentForm = () => {
  let navigate = useNavigate()
  let { listingId } = useParams()
  let { userId } = useParams()
  let { commentId } = useParams()

  const initialState = {
    userId: userId,
    listingId: listingId,
    comment: ''
  }

  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    const getCommentById = async () => {
      const response = await axios.get(`${BASE_URL}/comment/${commentId}`)
      setFormState(response.data)
    }
    getCommentById()
  }, [commentId])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await UpdateComment({ ...formState })
    navigate(`/listing/${listingId}`)
  }

  return (
    <div className="center">
      <h1>Have An Update For This Pet?</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputbox">
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
        <div className="button-group">
          <button
            id="form-button"
            onClick={() => navigate(`/listing/${listingId}`)}
          >
            Go Back
          </button>
          <button type="submit" id="form-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditCommentForm
