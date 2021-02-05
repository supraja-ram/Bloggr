import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getPostDetails } from '../actions/postActions'
import DOMPurify from 'dompurify';

const BlogDetail = () => {
      const postDetail = useSelector((state) => state.postDetail)
      const {loading, blog, error} = postDetail
      const location = useLocation()
      const id = location.pathname.split("/")[2]
      
      const dispatch = useDispatch()

      useEffect(() => {
            dispatch(getPostDetails(id))
      }, [id, location, dispatch])

      let readingTime
      if (blog && blog.content) {
            const length = blog.content.split(" ").length / 200 
            if (length < 1) {
                  readingTime = "Less than a min read"
            }
            else {
                  readingTime = `${Math.round(length)} min read`
            }
      }
      return loading ? <div>Loading ... </div> : error ? <div className="alert alert--error">{error}</div> :
            (<main className = "blog-detail">
                  <h2>{blog.title}</h2>
                  <p className="blog-detail__description">{blog.description}</p>
                  <div className="blog-detail__highlight">
                        <p className = "blog-detail__author">By {blog.name}</p>
                        {readingTime && <p className="blog-detail__duration">{readingTime}</p>}
                  </div>
                  <div className = "blog-detail__content" dangerouslySetInnerHTML ={{__html: DOMPurify.sanitize(blog.content)}}></div>
            </main>)
}

export default BlogDetail
