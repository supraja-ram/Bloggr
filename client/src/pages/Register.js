import React, { useState, useEffect} from 'react'
import {useHistory, useLocation, Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {register} from '../actions/userActions'

const Register = () => {
      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [confirmPassword, setConfirmPassword] = useState('')
      const [message, setMessage] = useState('')
      const history = useHistory()
      const location = useLocation()
      const redirect = location.search ? location.search.split('=')[1] : '/'
      const dispatch = useDispatch()
      const userRegister = useSelector(state => state.userRegister)
      const { userInfo, loading, error } = userRegister

      useEffect(() => {
            if (userInfo) {
                  history.push(redirect)
            }
      }, [history, userInfo, redirect])

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
            <div>
                  {error && <div>ERROR</div>}
                  {loading && <div>LOADING</div>}
                  <h1>Sign Up</h1>
                  <form onSubmit={submitHandler}>
                        {message && <div>{message}</div>}
                        <label>Name:     </label>
                        <input type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} value={name}></input><br></br>
                        <label>Email:     </label>
                        <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email}></input><br></br>
                        <label>Password:     </label>
                        <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                        <br></br>
                        <input type="password" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}></input>
                        <br></br>
                        <button type="submit">SUBMIT</button>
                        <Link to = {redirect ? `/register?redirect=${redirect}` : '/register'}>Login here</Link>
            </form>
            </div>
      )
}

export default Register
