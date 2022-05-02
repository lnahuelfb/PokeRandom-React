import React from 'react'

import { Description, Foot, Social, Link, Img } from './styles'

import linkedin from '../../images/linkedin.svg'
import github from '../../images/github.svg'
import twitter from '../../images/Twitter.svg'

const Footer = () => {
  return (
    <Foot>
      <Description>
        Nahuel Beschtedt <br/>
        Fullstack Developer
      </Description>
      <Social>
        <Link href='https://www.linkedin.com/in/nahuel-fernandez-beschtedt/'>
          <Img src={linkedin} alt="Linkedin" />
        </Link>
        <Link href='https://github.com/lnahuelfb'>
          <Img src={github} alt='Github'/>
        </Link>
        <Link href='https://twitter.com/home'>
          <Img src={twitter} alt='Twitter'/>
        </Link>
      </Social>
  </Foot>
  )
}

export default Footer