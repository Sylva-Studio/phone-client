import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div id='nav'>
      <div id='nav_inner'>
      <span>
        <Link to='/'>
        PhoneBook
        </Link>
        {/* <Link to='/Spotify'>
        Spotify
        </Link> */}
      </span>
      <Link to='phonebookform'>
      <button id='addbtn'>Add Contact</button>
      </Link>
      </div>
    </div>
  )
}

export default Navbar
