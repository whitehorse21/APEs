import { Card } from 'react-bootstrap';
import { FcLike } from 'react-icons/fc';

import { CardContainer } from './ape.style';

const ApeCard = ({ item, handleClick}) => {
  var ipfsUrl = item.imageUri;
  var relativeUrl = ipfsUrl.split("://")[1];
  var baseUrl = "https://vesea.mypinata.cloud/ipfs/"
  var imgUrl = baseUrl + relativeUrl;
  return (
    <CardContainer onClick={handleClick}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <div className='d-flex justify-content-between align-items-baseline'>
          <span>#{item.nativeId}</span>
          <span><FcLike /> {item.likes}</span>
        </div>
      </Card.Body>
    </CardContainer>
  )
}

export default ApeCard;