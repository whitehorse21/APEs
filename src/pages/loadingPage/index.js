import './index.css';
import { GlobalStyle } from '../comingSoon/coming.style';
import loaderImg from '../../images/loader.svg';

const LoadingPage = () => {

  return (
    <>
      <GlobalStyle />
      <div style={{height: "100vh"}} className="loading-monkey d-flex justify-content-center align-items-center">
        <img src={loaderImg} alt="loader" />
      </div>
    </>
  )
}

export default LoadingPage;