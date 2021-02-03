import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {NavLink} from 'react-router-dom'
import { logout } from '../actions/userActions'

const Navbar = () => {
      const userLogin = useSelector(state => state.userLogin)
      const { userInfo } = userLogin
      const dispatch = useDispatch()
      const logoutHandler = () => {
            dispatch(logout())
      }
      return (
            <header>
            <nav className="nav">
                  <NavLink to = '/'><h1 className = "nav-brand">BLOG</h1></NavLink>            
                  <div className = "nav-links">
                        <NavLink to='/create' className = "nav-link" activeClassName="active-link">Create</NavLink>
                        {userInfo ?
                        (<button onClick={logoutHandler} className = "nav-btn">Logout</button>)
                        : (<span><NavLink to ='/login' className = "nav-link" activeClassName="active-link">Login</NavLink><NavLink to='/register' className = "nav-link" activeClassName="active-link">Register</NavLink></span>)
                              }
                  </div>
            </nav>
            </header>
      )
}

export default Navbar
