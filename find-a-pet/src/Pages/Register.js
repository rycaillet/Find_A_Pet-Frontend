import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import { Link } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const initialFormValues = {
    userName: '',
    password: '',
    confirmPassword: ''
  }

  const [formValues, setFormValues] = useState({ initialFormValues })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      username: formValues.username,
      password: formValues.password
    })
    setFormValues(initialFormValues)
    navigate('/login')
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            className="input"
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="username"
            value={formValues.username}
            required
          />
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            onChange={handleChange}
            type="password"
            name="password"
            value={formValues.password}
            required
          />
          <label className="label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="input"
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            required
          />
          <button
            disabled={
              !formValues.userName ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Register
          </button>
        </form>
        <Link to={'/login'}>
          <button>Already A User?</button>
        </Link>
      </div>
    </div>
  )
}

export default Register
