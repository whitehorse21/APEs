import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { ModalContainer, ModalButton } from "./modal.style";

const DisplayApeModal = ({ ape, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [detailsList, setDetailsList] = useState([]);

  var ipfsUrl = ape.imageUri;
  var relativeUrl = ipfsUrl.split("://")[1];
  var baseUrl = "https://vesea.mypinata.cloud/ipfs/"
  var imgUrl = baseUrl + relativeUrl;

  useEffect(() => {
    setDetailsList(ape.attributes.filter((item) => item.value !== "None"));
    if(!!ape) {
      setIsOpen(true);
    }
  }, [ape]);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  }

  return (
    <ModalContainer show={isOpen} onHide={onClose}>
        <Container className="p-4">
        <div className="d-flex justify-content-end">
          <button
          onClick={closeModal}
          className="btn p-1"><AiOutlineCloseCircle color="#fff" /></button>
        </div>
          <Row>
            <Col sm={12} md={6}>
              <div><img className="w-100" src={imgUrl} alt="mad-apes" /></div>
            </Col>
            <Col sm={12} md={6}>
              <div>
                <span>Name</span>
                <h2>{`${ape.name}`}</h2>
              </div>
              <div>
                <span>Token ID</span>
                <h2>{`#${ape.nativeId}`}</h2>
              </div>
              <div>
                <span>Rank</span>
                <h2>{`${ape.rank}`}</h2>
              </div>
              <div>
                <span>ownerAddress</span>
                <h6 className="long-text">{`#${ape.ownerAddress}`}</h6>
              </div>

                <div className="d-flex btn-wrap justify-content-start flex-wrap">
                  {
                  detailsList.map((item, i) => (
                      <ModalButton key={i}>
                        <span className="btn-top">{item.traitType}</span>
                        <span className="btn-btm">{item.value}</span>
                      </ModalButton>
                  ))
                  }
                </div>
            </Col>
          </Row>
        </Container>
    </ModalContainer>

  )

}

export default DisplayApeModal;