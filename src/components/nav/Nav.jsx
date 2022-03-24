import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {ImUser} from 'react-icons/im'
import {MdSchool} from 'react-icons/md'
import {BsFillChatLeftDotsFill} from 'react-icons/bs'
import {Link} from 'react-scroll'


function Nav() {
  return (
    <nav>
        <Link to="root" smooth={true} duration={250}><AiFillHome/></Link>
        <Link to="about" smooth={true} duration={250}><ImUser/></Link>
        <a href="#"><MdSchool/></a>
        <a href="#"><BsFillChatLeftDotsFill/></a>
    </nav>
  )
}

export default Nav