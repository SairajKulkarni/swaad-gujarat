import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography, styled, Box } from "@mui/material";

import { bannerData } from "../../constants/data";

const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "500px",
  [theme.breakpoints.down("lg")]: {
    objectFit: "cover",
    height: "300px",
  },
}));

const GreetingBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const Text = styled(Typography)(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  color: "white",
  fontSize: "150px",
  textShadow: "0px 0px 15 , white",
  background: "rgba(0,0,0, 0.1)",
  [theme.breakpoints.down("lg")]: {fontSize: "100px"},
  [theme.breakpoints.down("md")]: {fontSize: "80px"},
  [theme.breakpoints.down("sm")]: {fontSize: "50px"},
}));

const Banner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={true}
      autoPlay={true}
      infinite={true}
      autoPlaySpeed={7000}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
    >
      {bannerData.map((data) => (
        <GreetingBox key={data.key}>
          <StyledImg src={data.url} alt="banner" />
          <Text>{data.text}</Text>
        </GreetingBox>
      ))}
    </Carousel>
  );
};

export default Banner;
