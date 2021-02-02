import { GET_POSTS_FAIL, GET_POSTS_REQUEST, GET_POSTS_SUCCESS } from '../constants/postConstants'

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
