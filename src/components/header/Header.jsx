import React from 'react'
import './header.css'
import me from '../../assets/img/me.png'
import {BsInstagram, BsGithub, BsLinkedin, BsWhatsapp, BsDiscord} from 'react-icons/bs'

function Header() {
  return (
    <section className='header_intro'>
      <div className='container'>

        <div className='intro_me'>
          <h2>Hey, ik ben</h2>
          <h1>Dylan Doldersum</h1>
          <h3>Front-end Developer</h3>
        </div> 
        
        <div className='button_wrapper'>
            <button className='button-primary'>Download CV</button>
            <button className='button-primary'>Contact me</button>
        </div>

        <div className='avatar'>
          <img src={me}/>
        </div>

        <div className='socials'>
            <a target='_blank' href='https://instagram.com/dylandold/'><BsInstagram/></a>
            <a target='_blank' href='https://www.linkedin.com/in/dylan-doldersum-b99639205/'><BsLinkedin/></a>
            <a target='_blank' href='https://github.com/dylandoldersum/'><BsGithub/></a>
            <a target='_blank' href='https://wa.me/+310640024545/?text=Hey, Dylan!'><BsWhatsapp/></a>
            <a target='_blank'href='https://discord.com/users/205613180120989696/'><BsDiscord/></a>
        </div>
              
      </div>
    </section>
  ) 
}

export default Header