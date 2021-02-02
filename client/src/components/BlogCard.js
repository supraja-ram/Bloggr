import React from 'react'

const BlogCard = ({ blog }) => {
      const { title, description, content, name } = blog
      
      return (
            <div>
                  <p>{name}</p>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <h3>{content}</h3>
            </div>
      )
}

export default BlogCard
