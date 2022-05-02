import React from 'react'

import { Description, Foot, Social, Link, Img } from './styles'

import linkedin from '../../images/linkedin.svg'
import github from '../../images/github.svg'
import twitter from '../../images/Twitter.svg'

const Footer = () => {
  return (
    <Foot>
      <Description>
        <Link href='https://porfolio-nahuelfb.vercel.app/' target="_blank" rel="noopener noreferrer">
        Nahuel Beschtedt <br/>
        Fullstack Developer
        </Link>
      </Description>
      <Social>
        <Link href='https://www.linkedin.com/in/nahuel-fernandez-beschtedt/' target="_blank" rel="noopener noreferrer">
          <Img src={linkedin} alt="Linkedin" />
        </Link>
        <Link href='https://github.com/lnahuelfb' target="_blank" rel="noopener noreferrer">
          <Img src={github} alt='Github'/>
        </Link>
        <Link href='https://twitter.com/home' target="_blank" rel="noopener noreferrer">
          <Img src={twitter} alt='Twitter'/>
        </Link>
      </Social>
  </Foot>
  )
}

export default Footer