import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import {IconContext} from 'react-icons'
import {BsFillTrashFill} from 'react-icons/bs'
import DOMPurify from 'dompurify';
import { deletePost, getPostDetails } from '../actions/postActions'

const BlogDetail = () => {
      const [message, setMessage] = useState('')

      const postDetail = useSelector((state) => state.postDetail)
      const userLogin = useSelector((state) => state.userLogin)
      const { userInfo } = userLogin
      const { loading, blog, error } = postDetail
      
      const history = useHistory()
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

      const deletePostHandler = () => {
            dispatch(deletePost(id))
            setMessage("Post deleted")
            setTimeout(function () {
                  history.push('/')
            }, 500)
      }

      return (
            <main className="blog-detail">
            {loading && <div>Loading ...</div>}
            { error && <div className="alert alert--error">{error}</div>}
                  {message && <div className="alert alert--error">{message}</div>}      
                  { blog && <div>
                        <h2>{blog.title}</h2>
                        <p className="blog-detail__description">{blog.description}</p>
                        <div className="blog-detail__highlight">
                              <p className="blog-detail__author">By <strong>{blog.name}</strong></p>
                              {readingTime && <p className="blog-detail__duration">{readingTime}</p>}
                        </div>
                        <hr className="blog-detail__hr"></hr>
                        {userInfo && userInfo._id === blog.user && 
                              <div><button onClick={deletePostHandler} className="blog-detail__delete">
                              <IconContext.Provider value={{ className: 'delete-icons' }}><BsFillTrashFill /></IconContext.Provider>
                        </button></div>}
                        <div className="blog-detail__content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }}></div>
                  </div>}
            </main>)
}

export default BlogDetail
