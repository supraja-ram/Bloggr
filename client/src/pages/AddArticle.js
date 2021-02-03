import e from 'cors'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory, useLocation } from 'react-router-dom'
import { createPost } from '../actions/postActions'

const AddArticle = () => {
      
      const [title, setTitle] = useState('')
      const [description, setDescription] = useState('')
      const [content, setContent] = useState('')

      const dispatch = useDispatch()
      const userLogin = useSelector((state) => state.userLogin)
      const { userInfo } = userLogin
      const history = useHistory()
      const location = useLocation()
      console.log(location.search)

      useEffect(() => {
            if (!userInfo) {
                  history.push('/login')
            }
      }, [userInfo])

      const createPostHandler = (e) => {
            e.preventDefault()
            dispatch(createPost(title, description, content))
      }

      return (
            <form onSubmit = {createPostHandler}>
                  <div>
                  <label>Title:</label><br></br>
                        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                  </div>
                  <div>
                  <label>Description:</label><br></br>
                        <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                  </div>
                  <div>
                  <label>Content:</label><br></br>
                        <input type="text" name="content" value={content} onChange={(e) => setContent(e.target.value)} />
                  </div>
                  <button>Publish</button>
            </form>
      )
}

export default AddArticle
