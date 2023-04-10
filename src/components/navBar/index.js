import React, { useState, useEffect, useRef } from "react";
import { useSelector,useDispatch } from 'react-redux';
import "./NavBar.css";
import TwitterImage from "../../images/icons/twitter.svg";
import DiscordImage from "../../images/icons/discord.svg";
import FaceImage from "../../assets/images/face.svg";
import WalletImage from "../../assets/images/wallet.png";
import { Link, useHistory } from "react-router-dom";
import { login, truncateAddress } from "../../redux/utils/WalletConnect";
import { signedWallet, signedOut } from '../../redux/actions/authActions';
import { Dropdown } from 'react-bootstrap';

function NavBar() {
  const dispatch = useDispatch();
  const ref = useRef(null);  
  const [click, setClick] = useState(false);
  const [bShowDropDown, setShowDropDown] = useState(false);
  
  const handleClick = () => setClick(!click);
  const history = useHistory();
  //const signerAddress = useSelector((state) => state.auth.walletAddress);
  const [signerAddress, setSignerAddress] = useState(localStorage.getItem("signer"))

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {      
        setShowDropDown(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };    
  }, []);

  const handleSelect = (e) => {
    const selected = e.target[e.target.selectedIndex].value;
    if(selected === "alpha"){
      history.push("/");
    } else if(selected === "fusion"){
      history.push('/fusion');
    }
  }

  const connectWallet = () => {
    if (!signerAddress || signerAddress === '0x0') {
      login()
      .then((address) => {
        console.log(address);
        localStorage.setItem('signer', address);    
        setSignerAddress(address);
        //dispatch(signedWallet(address));
      })
      .catch((error) => {
        console.log(error.message);
        localStorage.setItem('signer', '0x0');        
        setSignerAddress('0x0');
        //dispatch(signedWallet('0x0'));
      })
    } else {
      localStorage.setItem('signer', '0x0');        
      setSignerAddress('0x0');
      //dispatch(signedWallet("0x0"));
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img src={TwitterImage} alt="twitter"></img>
            </a>
            <a href="https://discord.com/" target="_blank" rel="noreferrer">
              <img src={DiscordImage} alt="discord"></img>
            </a>
          </div>
          <div className="space">
        </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
            <Link to="/mint">
              <span className="nav-links">Mint</span>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/ape-world">
              <span className="nav-links">ApeWorld</span>
            </Link>
            </li>
            <li className="nav-item mobile-item">
              <Link to="/">
              <img src={FaceImage} alt="face" className="face-image" />
              </Link>
            </li>
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle variant="error" id="dropdown-basic">
                  Gallery
                </Dropdown.Toggle>
              
                <Dropdown.Menu>
                  <Dropdown.Item href="/alpha-collections">Alpha Collections</Dropdown.Item>
                  <Dropdown.Item href="/fusion-collections">Fusion Collections</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>            
            </li>
          </ul>

          <div className="space">
          </div>

          <div className="flex buttonContainer">
            <select
             onChange={handleSelect}
             className="select-collection desktop-select">
              <option value="alpha">Alpha Collection</option>
              <option value="fusion">Fusion Collection</option>
            </select>
            <select
              onChange={handleSelect}
             className="select-collection mobile-select">
              <option value="alpha">Alpha</option>
              <option value="fusion">Fusion</option>
            </select>
            { !signerAddress || signerAddress === '0x0' ? (
              <div>
                <button className="connect-wallet desktop-button px-2" onClick={connectWallet}>Connect Wallet</button>
                <button className="connect-wallet mobile-button px-2" onClick={connectWallet}>Connect</button>
              </div>
            ) : (
              <Dropdown>
                <Dropdown.Toggle variant="error" id="dropdown-basic">
                  {truncateAddress(signerAddress)}
                </Dropdown.Toggle>
              
                <Dropdown.Menu>
                  <Dropdown.Item>View Profile</Dropdown.Item>
                  <Dropdown.Item href="/collections">My Collection</Dropdown.Item>
                  <Dropdown.Item>My Auctions</Dropdown.Item>
                  <Dropdown.Item onClick={connectWallet}>Sign out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>            
            )}
          </div>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
