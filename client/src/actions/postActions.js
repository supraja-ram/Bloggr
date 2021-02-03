import axios from 'axios'
import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAIL, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAIL  } from '../constants/postConstants'

export const listPosts = () => async (dispatch) => {
      try {
            dispatch({
                  type: GET_POSTS_REQUEST
            })
            
            const { data } = await axios.get('/api/posts')
      
            dispatch({
                  type: GET_POSTS_SUCCESS,
                  payload: data
            })
      }
      catch (error) {
            dispatch({
                  type: GET_POSTS_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const createPost = (title, description, content) => async (dispatch) => { 
      try { 
            dispatch({ 
                  type: CREATE_POST_REQUEST 
            }) 
             
            const userInfo = JSON.parse(localStorage.getItem('userInfo')) 
            const config = { 
                  headers: { 
                  'Content-Type': 'application/json', 
                  Authorization: `Bearer ${userInfo.token}`, 
                }, 
            }  
            const { data } = await axios.post('api/posts/', { title, description, content }, config) 
            dispatch({ 
                type: CREATE_POST_SUCCESS, 
                payload: data 
            }) 
      } 
      catch (error) { 
            dispatch({ 
                  type: CREATE_POST_FAIL, 
                  payload: error.response && error.response.data.message 
                  ? error.response.data.message 
                  : error.message, 
            }) 
      } 
}