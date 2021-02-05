import React, { useState, useEffect} from 'react'
import {useHistory, Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {register} from '../actions/userActions'

const Register = () => {
      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [confirmPassword, setConfirmPassword] = useState('')
      const [message, setMessage] = useState('')
      const history = useHistory()
      const dispatch = useDispatch()
      const userRegister = useSelector(state => state.userRegister)
      const { userInfo, loading, error } = userRegister

      useEffect(() => {
            if (userInfo) {
                  history.push('/')
            }
      }, [history, userInfo])

      const submitHandler = (e) => {
            e.preventDefault()
            if (password !== confirmPassword) {
                  setMessage('Passwords do not match')
            }
            else {
                  dispatch(register(email, password, name))
            }
      }
      return (
            <main className = "section__auth">
                  {loading && <div>LOADING</div>}
                  <div className="form-container">
                  <h1>REGISTER</h1>
                  {error && <div className = "alert--error">{error}</div>}
                  <form onSubmit={submitHandler}>
                        {message && <div className = "msg--error">{message}</div>}
                        <div className="form-group">
                              <label>Name:     </label>
                              <input type="text" onChange={(e) => setName(e.target.value)} value={name} className = "form-control form-text"></input>
                        </div>
                        <div className="form-group">
                              <label>Email</label>
                              <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className = "form-control form-text"></input>
                        </div>
                        <div className="form-group">
                              <label>Password</label>
                              <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className = "form-control form-text"></input>
                              </div>
                        <div className="form-group">
                              <label>Confirm Password</label>
                              <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} className = "form-control form-text"></input>
                        </div>
                        <button type="submit" className = "btn btn--dark">REGISTER</button>
                        <Link to = '/login' className = "link">Have an account? Login here</Link>
            </form>
                  </div>
            </main>
      )
}

export default Register
