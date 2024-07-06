import { Box, Typography, styled } from "@mui/material";

const Container = styled(Box)({
  padding: "24px",
  borderRadius: "8px",
  boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.6)",
  width: "75%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(255,255,255, 0.2)",
  backdropFilter: "blur(10px)",
});

const Image = styled("img")(({ theme }) => ({
  width: "40%",
  maxWidth: "600px",
  borderRadius: "8px",
  [theme.breakpoints.down("md")]: {
    width: "60%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const HeadingText = styled(Typography)(({ theme }) => ({
  fontSize: "36px",
  fontWeight: "bold",
  color: "#edc967",
  textShadow: "0px 0px 5px black",
  marginTop: "30px",
  textAlign: "center",
  [theme.breakpoints.down("lg")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
  },
}));

const IntroText = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  textAlign: "justify",
  marginTop: "16px",
  color: "white",
  [theme.breakpoints.down("lg")]: {
    fontSize: "16px",
  },
}));

const Info = ({ imageUrl, heading, text }) => {
  return (
    <Container>
      <Image src={imageUrl} alt="Gujarat Crafts" />
      <HeadingText variant="h3">{heading}</HeadingText>
      <IntroText>{text}</IntroText>
    </Container>
  );
};

export default Info;
