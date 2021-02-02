import React, { useState, useEffect} from 'react'
import {useHistory, useLocation, Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {login} from '../actions/userActions'

const LoginPage = () => {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const location = useLocation() 
      const history = useHistory()
      const redirect = location.search ? location.search.split('=')[1] : '/'
      const dispatch = useDispatch()
      const userLogin = useSelector(state => state.userLogin)
      const { userInfo, loading, error } = userLogin

      useEffect(() => {
            if (userInfo) {
                  history.push(redirect)
            }
      }, [history, userInfo, redirect])

      const submitHandler = (e) => {
            e.preventDefault()
            dispatch(login(email, password))
      }
      return (
            <div>
                  {error && <div>ERROR</div>}
                  {loading && <div>LOADING</div>}
                  <h1>Sign In</h1>
                  <form onSubmit = {submitHandler}>
                        <label>Email:     </label>
                        <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email}></input><br></br>
                        <label>Password:     </label>
                        <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                        <br></br>
                        <button type="submit">SUBMIT</button>
                        <Link to = {redirect ? `/register?redirect=${redirect}` : '/register'}>New Customer ? Register here</Link>
            </form>
            </div>
      )
}

export default LoginPage
