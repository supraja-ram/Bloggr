import express from 'express'
import { createPost, deletePost, getAllPosts, getPostByID, updatePost } from '../controllers/postController.js'
import { auth } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getAllPosts).post(auth, createPost)
router.route('/:id').get(getPostByID).put(auth, updatePost).delete(auth, deletePost)

export default router