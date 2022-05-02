import styled from 'styled-components';

export const Foot = styled.footer`
  background-color: #E83E34;
  display: flex;
  position: fixed;
  bottom: 0;
  border-top: solid 3px black;
  height: 12vh;
  width: 100%;
  text-align: start;
`

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-weight: bold;
  color: whitesmoke;
  text-align: start;
  margin: auto;
  margin-left: 10px;
`

export const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
`

export const Link = styled.a`
  margin-right: 15px; 
`

export const Img = styled.img`
  height: 25px;
  width: 25px ;
`