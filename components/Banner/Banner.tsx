import styled from "styled-components";
import Image from "next/image";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import Slider from "react-slick";

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 530px;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Banner = () => {
  const banners = [banner1, banner2, banner3];

  return (
    <Slider {...settings}>
      {banners.map((e, i) => (
        <BannerContainer key={i} id="banner">
          <Image src={e} alt="banner" layout="fill" objectFit="cover" />
        </BannerContainer>
      ))}
    </Slider>
  );
};

export default Banner;
