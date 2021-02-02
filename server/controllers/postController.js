import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'
import User from '../models/userModel.js'

//@route  GET api/posts
//@desc   Get all blog posts
//@access Public

const getAllPosts = asyncHandler(async(req,res)=>{
      const posts = await Post.find().sort({date: -1})
      res.json(posts)
 })

//@route  POST api/posts
//@desc   Create a blog post
//@access Private
const createPost = (asyncHandler(async (req, res) => {
      const user = await User.findById(req.user._id)
      const {title, description, content} = req.body
      const newPost = new Post({
            title,
            description,
            content,
            user: req.user._id,
            name: user.name
      })
      const post = await newPost.save()
      res.status(201).json(post)
      
}))

//@route  GET api/posts/:id
//@desc   Get a blog post by id
//@access Public

const getPostByID = asyncHandler(async (req, res) => {
      
      const post = await Post.findById(req.params.id)
      if (!post) {
            res.status(400)
            throw new Error("Post not found")
      }
      else {
            res.json(post)
      }
})

//@route  PUT api/posts/:id
//@desc   Update/Edit a blog post
//@access Public

const updatePost = asyncHandler(async (req, res) => {
      const post = await Post.findById(req.params.id)
      if (!post) {
            res.status(400)
            throw new Error("Post not found")
      }
      if (post.user.toString() != req.user._id) {
            res.status(401)
            throw new Error("User not authorized")
      }
      else {
            post.title = req.body.title || post.title,
            post.content = req.body.content || post.content,
            post.description = req.body.description || post.content
            await post.save()
            res.json(post)
      }
})

//@route  DELETE api/posts/:id
//@desc   Delete a post
//@access Private

const deletePost = asyncHandler(async (req, res) => {
     
      const post = await Post.findById(req.params.id)
      if (!post) {
            res.status(401)
            throw new Error("Post not found")
      }
      if (post.user.toString() != req.user._id) {
            res.status(401)
            throw new Error("User not authorized")
      }
      else {
            await post.remove()
            res.json({ message: 'Post removed' })
      }
      
})

export {getAllPosts, createPost, getPostByID, deletePost, updatePost}