import React from 'react'
import './createBlogBox.css'
import { Link } from 'react-router-dom'

function CreateBlogBox() {
<<<<<<< HEAD
  return (
    <div className='create-blog-box'>
      <div className='lines' id='line-1'>
        Publish your thoughts
      </div>
      <div className='lines' id='line-2'>
        Create blogs for free
      </div>
      <div className='lines' id='line-3'>
        <Link to='/create-blog' id='link'>
          Create Blog
        </Link>
      </div>
    </div>
  )
=======
    return (
        <div className = "create-blog-box">
            <div className = "lines" id = "line-1">Publish your thoughts</div>
            <div className = "lines" id = "line-2">Create blogs for free</div>
            <Link to = "/" id = "line-3-btn"><div className = "lines" id = "line-3">Create Blog</div></Link>
        </div>
    )
>>>>>>> dev
}

export default CreateBlogBox
