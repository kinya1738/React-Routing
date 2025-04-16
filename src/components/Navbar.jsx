import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='navigation'>
            <Link to="/" >Home</Link>
            <Link to="/about">About</Link>
            <Link to="/add-post">Add Post</Link>
        </nav>
    </div>
  )
}

export default Navbar