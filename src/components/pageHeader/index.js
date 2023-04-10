import { HeaderContainer, HeaderImage, LogoContainer } from "./header.style";
import logo from '../../images/header-logo.svg';

const PageHeader = ({slide}) => {
  return (
    <HeaderContainer>
    <HeaderImage src={slide} alt="Collection"/>
    <LogoContainer>
      <img src={logo} alt="logo" />
      <h4>MAD ⓥ-APES</h4>
      <p>Created by MAD ⓥ-APES</p>
    </LogoContainer>
  </HeaderContainer>
  )
}

export default PageHeader;