import React from 'react'
import { UpdateListing } from '../services/Auth'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const EditListingForm = () => {
  let navigate = useNavigate()
  let { listingId } = useParams()

  const initialState = {
    petName: '',
    petImage: '',
    description: '',
    sex: '',
    species: '',
    lastSeen: ''
  }

  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    const getListingById = async () => {
      const response = await axios.get(`${BASE_URL}/listing/${listingId}`)
      setFormState(response.data)
    }
    getListingById()
  }, [listingId])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await UpdateListing({ ...formState })
    navigate(`/listing/${listingId}`)
  }

  return (
    <div className="center1">
      <h1>Need To Update Your Info?</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputbox1">
          <input
            type="text"
            name="petName"
            id="petName"
            onChange={handleChange}
            value={formState.petName}
            required
            placeholder="Pet Name"
            className="input1"
          />
        </div>
        <div className="inputbox1">
          <input
            type="text"
            name="petImage"
            id="petImage"
            onChange={handleChange}
            value={formState.petImage}
            required
            placeholder="Image URL"
            className="input1"
          />
        </div>
        <div className="inputbox1">
          <input
            name="description"
            cols="60"
            rows="3"
            id="description"
            onChange={handleChange}
            value={formState.description}
            required
            placeholder="Description"
            className="input1"
          />
        </div>
        <div className="inputbox1">
          <input
            type="text"
            name="sex"
            id="sex"
            onChange={handleChange}
            value={formState.sex}
            required
            placeholder="Gender"
            className="input1"
          />
        </div>
        <div className="inputbox1">
          <input
            type="text"
            name="species"
            id="species"
            onChange={handleChange}
            value={formState.species}
            required
            placeholder="Species"
            className="input1"
          />
        </div>
        <div className="inputbox1">
          <input
            type="text"
            name="lastSeen"
            id="lastSeen"
            onChange={handleChange}
            value={formState.lastSeen}
            required
            placeholder="Last seen"
            className="input1"
          />
        </div>
        <button
          id="form-button1"
          onClick={() => navigate(`/listing/${listingId}`)}
        >
          Go Back
        </button>
        <button type="submit" id="form-button1">
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditListingForm
