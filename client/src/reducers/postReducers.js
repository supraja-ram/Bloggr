import { GET_POSTS_FAIL, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAIL } from '../constants/postConstants'

export const postsListReducer = (state = { blogs: [] }, action) => {
      switch (action.type) {
            case GET_POSTS_REQUEST:
                  return { loading: true }
            case GET_POSTS_SUCCESS:
                  return { loading: false, blogs: action.payload }
            case GET_POSTS_FAIL: {
                  return { loading: false, error: action.payload }
            }
            default:
                  return state
      }
}

export const postCreateReducer = (state = {}, action) => { 
      switch (action.type) { 
            case CREATE_POST_REQUEST: 
                  return { loading: true } 
            case CREATE_POST_SUCCESS: 
                  return { loading: false, blog: action.payload } 
            case CREATE_POST_FAIL: 
                  return { loading: false, error: action.payload } 
            default: 
                  return state 
      } 
}