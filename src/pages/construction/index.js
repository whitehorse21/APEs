import ApeBtn from "../../components/button"
import { GlobalStyle, ConstructionBar, 
  ConstructionBarBtm, SocialLinks, TextContainer } from "./construct.style"

import twitter from "../../images/icons/twitter.svg";
import discord from '../../images/icons/discord.svg';
import { Link } from "react-router-dom";

const Construction = ({title}) => {
  return (
    <>
      <GlobalStyle />
      <ConstructionBar />
      <TextContainer>
        <div className="under">
          <h1>UNDER</h1>
        </div>
        <h2 className="consTitle">CONSTRUCTION</h2>
        <h4 className="ape">{title}</h4>
        <Link to="/">
          <ApeBtn title="Go Back To Home" active />
        </Link>
        <SocialLinks>
          <a href="/#" className="social-link">
            <img src={twitter} alt="twitter" className="social-icon" />
          </a>
          <a href="/#" className="social-link">
            <img src={discord} alt="discord" className="social-icon" />
          </a>
        </SocialLinks>
      </TextContainer>
      <ConstructionBarBtm />
    </>
  )
}

export default Construction