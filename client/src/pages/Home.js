import React from 'react'
import Blogs from '../components/Blogs'

const Home = () => {
      
      return (
            <div>
                  <div className = "home-bg-img"></div>
                  <main><h1 className = "section__home">RECENT POSTS</h1><Blogs/></main>
            </div>
      )
}

export default Home
