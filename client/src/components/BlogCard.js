import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
      const { title, description, name, _id, content } = blog
      let readingTime
      const length = content.split(" ").length / 200 
            if (length < 1) {
                   readingTime = "Less Than A Min Read"
            }
            else {
                   readingTime = `${Math.round(length)} Min Read`
            }
      return (
            <div className = "blog-card">
                  <p className = "blog-card__name">By <strong>{name}</strong></p>
                  <h2 className = "blog-card__title">{title}</h2>
                  <p className="blog-card__desc">{description}</p>
                  <div className = "blog-card__highlight">
                        <div className="blog-card__duration">{readingTime}</div>
                        <Link to={`/blog/${_id}`} className="blog-card__link">Continue Reading</Link>
                  </div>
                  
            </div>
      )
}

export default BlogCard
