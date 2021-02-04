import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getPostDetails } from '../actions/postActions'

const BlogDetail = () => {
      const postDetail = useSelector((state) => state.postDetail)
      const {loading, blog, error} = postDetail
      const location = useLocation()
      const id = location.pathname.split("/")[2]
      const dispatch = useDispatch()

      useEffect(() => {
            dispatch(getPostDetails(id))
      }, [id, location, dispatch])

      return loading ? <div>Loading ... </div> : error ? <div className="msg--error">{error}</div> :
            (<div className = "section__blog-detail">
                  <h1>{blog.title}</h1>
                  <p>{blog.description}</p>
                  <p>{blog.content}</p>
            </div>)
}

export default BlogDetail
