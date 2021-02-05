import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { listPosts } from '../actions/postActions'
import BlogCard from './BlogCard'


const Blogs = () => {
      const postsList = useSelector((state) => state.postsList)
      const { blogs, loading, error } = postsList
      const dispatch = useDispatch()
      useEffect(() => {
            dispatch(listPosts())
      }, [dispatch])
      
      return loading ? (<div>Loading</div>) : error ? (<div className = "alert alert--error">{error}</div>) : (<div className = "blog-cards">
      
            {blogs.map((blog) => (
                  <BlogCard blog={blog} key={blog._id}/>
            ))}
      </div>)
}

export default Blogs
