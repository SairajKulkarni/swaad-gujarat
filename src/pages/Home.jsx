import { Box, styled } from "@mui/material";
import Banner from "../components/home/Banner";
import Greeting from "../components/home/Greeting";
import PagesGrid from "../components/home/PagesGrid";
import Intro from "../components/home/Intro";

const HomeBox = styled(Box)({
  background: "url(12306.jpg) center/170% repeat-y",
  marginTop: "55px",
  padding: "50px 0px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "center",
  justifyContent: "center"
});

const Home = () => {
  return (
    <HomeBox>
      <Box style={{ width: "75%", margin: "0px auto" }}>
        <Banner />
      </Box>
      <Greeting />
      <Intro />
      <PagesGrid />
    </HomeBox>
  );
};

export default Home;
