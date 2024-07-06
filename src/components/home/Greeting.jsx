import { Box, Typography, styled } from "@mui/material";

const GreetingBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const GreetingText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  color: "white",
  fontSize: "150px",
  textShadow: "0px 0px 15 , white",
  [theme.breakpoints.down("lg")]: { fontSize: "100px" },
  [theme.breakpoints.down("md")]: { fontSize: "80px" },
  [theme.breakpoints.down("sm")]: { fontSize: "50px" },
}));

const Greeting = () => {
  return (
    <GreetingBox>
      <img
        src="https://i.pinimg.com/originals/06/a9/cc/06a9ccc351943f255d16563ea3258a35.png"
        alt="jai shree krishna"
        style={{ width: "50%" }}
      />
      <GreetingText>જય શ્રી કૃષ્ણ</GreetingText>
      <Typography color="white">Jai Shree Krishna</Typography>
    </GreetingBox>
  );
};

export default Greeting;
