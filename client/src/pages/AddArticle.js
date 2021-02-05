import React, { useState, useEffect } from 'react'
import ReactQuill from "react-quill";
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createPost } from '../actions/postActions'

const AddArticle = () => {
      const [title, setTitle] = useState('')
      const [description, setDescription] = useState('')
      const [content, setContent] = useState('')
      const [message, setMessage] = useState('')
      const dispatch = useDispatch()
      const userLogin = useSelector((state) => state.userLogin)
      const { userInfo } = userLogin
      
      const modules = {
            toolbar: [
                  ["bold", "italic", "underline", "strike"],
                  [{ 'script': 'sub'}, { 'script': 'super' }],
                  ]
            };
  
      const formats = [
            "bold",
            "italic",
            "underline",
            "strike",
            "script"
      ];
      const history = useHistory()
      useEffect(() => {
            if (!userInfo) {
                  history.push('/login')
            }
      }, [userInfo, history])

      const onEditorChange = (content, delta, source, editor) => {
            setContent(content)
      }

      const createPostHandler = (e) => {
            e.preventDefault()
            dispatch(createPost(title, description, content))
            setMessage("success")
            setTimeout(function () {
                  history.push('/')
            }, 3000)
            
      }

      return (
            <form onSubmit = {createPostHandler}>
                  <div>
                        <div>{message && <div>{message}</div>}</div>
                  <label>Title:</label><br></br>
                        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                  </div>
                  <div>
                  <label>Description:</label><br></br>
                        <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                  </div>
                  <div>
                  <label>Content:</label><br></br>
                  <ReactQuill value={content} onChange={onEditorChange} modules={modules} formats={formats}/>
                  </div>
                  <button type = "submit">Publish</button>
            </form>
      )
}

export default AddArticle
