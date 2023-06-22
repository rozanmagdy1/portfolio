import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';



const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/rozan-magdy-701b38215/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://www.github.com/rozanmagdy1" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.facebook.com/roze.magdy.3" target="_blank" rel="noreferrer" ><FaFacebook /></a>
    </div>
  )
}

export default HeaderSocials