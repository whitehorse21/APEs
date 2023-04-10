

import { Container, Row, Col } from "react-bootstrap";

import twitter from "../../images/icons/twitter.svg";
import instagram from "../../images/icons/instagram.svg";
import discord from '../../images/icons/discord.svg';

const Team = ({team}) => {

  return (
    <Container>
      <div className="team mx-auto my-5">
        <div className="mb-5">
        <h4 className="title">Team</h4>
        </div>
        <Row>
          { team.map((ape, index) => (
            <Col sm={12} md={6} className="my-6" key={ape.name}>
            {/* <div className={`${index===1 && 'mid'} team-member position-relative`}> */}
            <div className="team-member position-relative">
              <div>
                <img src={ape.image} alt={ape.name} className="team-image w-100" />
              </div>
              <div className="team-profile d-flex justify-content-between">
                <div className="team-position">
                  <h4 className="team-name">{ape.name}</h4>
                  <span>({ape.position})</span>
                </div>
                <div className="team-social d-flex">
                  <a href={ape.twitter} className="team-social-link">
                    <img src={twitter} alt="twitter" className="team-social-icon" />
                  </a>
                  <a href={ape.instagram} className="team-social-link">
                    <img src={instagram} alt="instagram" className="team-social-icon" />
                  </a>
                  <a href={ape.discord} className="team-social-link">
                    <img src={discord} alt="discord" className="team-social-icon" />
                  </a>
                </div>
              </div>
            </div>
            </Col>
          ))
          }
         
        </Row>
      </div>
    </Container>
  )
}

export default Team;