import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Login({ setIsLoggedIn }) {
  const [user, setUser] = useState({})
  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const navigate = useNavigate()

  const { username, password } = formData

  function onSubmit(e) {
    e.preventDefault()
    const user = {
      username,
      password
    }

    fetch(`/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            console.log(user)
            setIsLoggedIn(true)
            setUser(user)
            navigate(`/users/${user.id}`)
          })
        } else {
          res.json().then(json => setErrors(json.errors))
        }
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div>
       <div className='title'>
        <h1>Blue Bird</h1>
      </div>
      <div className="background-card">
      <div className="login-card">
        <div className="login-form">
          <form onSubmit={onSubmit}>
            <input
              className="input-field"
              name="username"
              type="text"
              value={username}
              placeholder="Enter Username"
              onChange={handleChange}
              required
            />
            <br />
            <input
              className="input-field"
              name="password"
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={handleChange}
              required
            />
            <br />
            <button className="button" type="submit">Log In</button>
          </form>
        </div>
        {errors ? <div className="errors">{errors}</div> : null}
        <p className="create-acc-link"> Not a Blue Bird member? <Link to="/NewUser">Sign up now!</Link></p>
      </div>
      </div>
    </div>
  )
}

export default Login