import logo from "../../images/logo.svg";

import twitter from "../../images/icons/twitter.svg";
import instagram from "../../images/icons/instagram.svg";
import discord from '../../images/icons/discord.svg';

import alphaRight from "../../images/apes/footer/alpha-right.svg";
import alphaLeft from "../../images/apes/footer/alpha-left.svg";

import { SocialLinks, FooterContainer, FooterMenu,
  FooterCopyRight, FooterSideImg } from "./footer.style";
import { Link } from "react-router-dom";

const Footer = ({leftImg=alphaLeft, rightImg=alphaRight}) => {
  return (
    <div className="position-relative">
      <FooterSideImg>
        <img src={leftImg} alt="leftFooterImg" className="left-footer-img" loading="lazy" />
        <img src={rightImg} alt="leftFooterImg" className="right-footer-img" loading="lazy" />
      </FooterSideImg>

      <FooterContainer>

      <div className="footer">
        <div className="footer-logo">
          <Link to="/">
          <img src={logo} alt="logo" loading="lazy" />
          </Link>
        </div>
        <FooterMenu>
          <li><a href="/#">About</a></li>
            <li><a href="/#">Roadmap</a></li>
            <li><a href="/#">Team</a></li>
            <li><a href="/#">FAQs</a></li>
        </FooterMenu>
        <SocialLinks>
          <a href="/#" className="social-link">
            <img src={twitter} alt="twitter" className="social-icon" />
          </a>
          <a href="/#" className="social-link">
            <img src={instagram} alt="instagram" className="social-icon" />
          </a>
          <a href="/#" className="social-link">
            <img src={discord} alt="discord" className="social-icon" />
          </a>
        </SocialLinks>
        <div className="hrule" />
        <FooterCopyRight>
          <small>Copyright @Madapes.com </small>
        </FooterCopyRight>
      </div>
    </FooterContainer>
  </div>
  )
}

export default Footer;