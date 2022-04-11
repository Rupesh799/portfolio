import React from 'react'
import { ImLinkedin2 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { VscTwitter} from "react-icons/vsc";
import { VscGithub } from "react-icons/vsc";
const HeaderIcon = () => {
  return (
    <div className='header_icon'>
        <a href="https://linkedin.com" ><ImLinkedin2/></a>
        <a href="https://instagram.com" ><AiFillInstagram/></a>
        <a href="https://twitter.com" ><VscTwitter/></a>
        <a href="https://github.com" ><VscGithub/></a>

    </div>
  )
}

export default HeaderIcon