import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
      const { title, description, name, _id } = blog
      
      return (
            <div className = "blog-card">
                  <p className = "blog-card__name">{name}</p>
                  <h2 className = "blog-card__title">{title}</h2>
                  <p className="blog-card__desc">{description}</p>
                  <Link to = {`/blog/${_id}`} className = "blog-card__link">Continue Reading</Link>
            </div>
      )
}

export default BlogCard
