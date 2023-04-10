
import ApeBtn from "../../components/button"
import { Link } from "react-router-dom";

import twitter from "../../images/icons/twitter.svg";
import discord from '../../images/icons/discord.svg';
import leftImg from '../../images/coming-soon/left-img.png';
import rightImg from '../../images/coming-soon/right-img.png';

import { SocialLinks, GlobalStyle, ComingSoonContainer } from "./coming.style";

const ComingSoon = ({withImage}) => {
  return (
    <>
    <GlobalStyle />
    <ComingSoonContainer>
      <h1>Alpha Collections</h1>
      <h4>Under Construction</h4>
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
        { withImage &&
          <>
            <img src={leftImg} alt="left" className="left-img" />
            <img src={rightImg} alt="right" className="right-img" />
          </>
        }
        
    </ComingSoonContainer>
  </>
  )
}

export default ComingSoon;
