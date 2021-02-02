import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { logout } from '../actions/userActions'

const Navbar = () => {
      const userLogin = useSelector(state => state.userLogin)
      const dispatch = useDispatch()
      const { userInfo, loading, error } = userLogin
      const logoutHandler = () => {
            dispatch(logout())
      }
      return (
            <div>
                  {userInfo ? (<div><button onClick={logoutHandler}>Logout</button></div>) : (<div><Link to = '/login'>SIGN IN</Link><br></br><Link to = '/register'>SIGN UP</Link></div>)}
            </div>
      )
}

export default Navbar
