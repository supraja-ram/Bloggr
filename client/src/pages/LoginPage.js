import React, { useState, useEffect} from 'react'
import {useHistory, Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {login} from '../actions/userActions'

const LoginPage = () => {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const history = useHistory()
      const dispatch = useDispatch()
      const userLogin = useSelector(state => state.userLogin)
      const { userInfo, loading, error } = userLogin

      useEffect(() => {
            if (userInfo) {
                  history.push('/')
            }
      }, [history, userInfo])

      const submitHandler = (e) => {
            e.preventDefault()
            dispatch(login(email, password))
      }
      return (
            <main className = "section__auth">
                  
                  {loading && <div>LOADING</div>}
                  <div className= "form-container"><h1>LOGIN</h1>
                  {error && <div className = "alert alert--error">{error}</div>}
                  <form onSubmit = {submitHandler}>
                        <div className="form-group">
                              <label>Email</label>
                              <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className = "form-control form-text"></input>
                        </div>
                        <div className="form-group">
                              <label>Password</label>
                              <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className = "form-control form-text"></input>
                        </div>
                        <button type="submit" className = "btn btn--dark">LOGIN</button>
                        <Link to = '/register' className = "link">New Customer ? Register here</Link>
                  </form></div>
            </main>
      )
}

export default LoginPage
