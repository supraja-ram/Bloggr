import React from 'react'
import svg from '../error.svg'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
      return (
            <main className = "errorPage">
                  <img src = {svg} alt = "error-svg" className = "error-svg"/>
                  <h1>Page Not Found</h1>
                  <Link to = "/">Back to Home Page</Link>
            </main>
      )
}

export default ErrorPage
