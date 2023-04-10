import { meetApes } from "../../data";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MeetApesSlide = () => {

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    paddingLeft: "20px",
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <Container className="apes">
        <h4 className="title">Meet our Apes</h4>
        <div className="apes-slider">
          <Slider {...settings}>
            {meetApes.map((ape, indx) => (
              <img src={ape}  key={indx} className="slider-image" alt={`mad-ape-${indx}`} />
            ))}
          </Slider>
        </div>
      </Container> 
  )
}

export default MeetApesSlide;