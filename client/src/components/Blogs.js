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
      console.log(blogs)
      return loading ? (<div>Loading</div>) : error ? (<div>{error}</div>) : (<div>
      
            <h1>RECENT POSTS</h1>
            {blogs.map((blog) => (
                  <BlogCard blog={blog} key={blog._id}/>
            ))}
      </div>)
}

export default Blogs
