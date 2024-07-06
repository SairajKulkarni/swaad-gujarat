import { Box, styled } from "@mui/material";

const ButtonBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Circle = styled(Box)({
  width: "14px",
  height: "14px",
  borderRadius: "100%",
  zIndex: "0"
});

const Ends = styled(Box)({
  width: "12px",
  height: "21px",
}); 

const GoldenStripBox = styled(Box)({
  width: "2px",
  height: "17px",
  background: "linear-gradient(0deg, #e6ac00, #8c7300, #e6ac00)",
});

const RedBox = styled(Box)({
  width: "10px",
  height: "17px",
  background: "linear-gradient(0deg, #c62828, #8e0000, #c62828)",
});

const BlueBox = styled(Box)({
  width: "10px",
  height: "17px",
  background: "linear-gradient(0deg, #1565c0, #003c8f, #1565c0)",
});

const GreenBox = styled(Box)({
  width: "10px",
  height: "17px",
  background: "linear-gradient(0deg, #2e7d32, #005005, #2e7d32)",
});

const MiddleGoldenBox = styled(Box)({
  width: "70px",
  height: "17px",
  background: "linear-gradient(0deg, #e6ac00, #8c7300, #e6ac00)",
});

const NavButton = ({ component }) => {
  return (
    <ButtonBox>
      <Circle
        style={{
          background: "radial-gradient(at 100%, #e6ac00 20%, #8c7300)",
          marginRight: "-2px",
        }}
      />
      <Ends
        style={{
          background: "radial-gradient(at 100%, #e6ac00 20%, #8c7300)",
          borderRadius: "100% 30% 30% 100%",
        }}
      />
      <RedBox />
      <GoldenStripBox/>
      <BlueBox />
      <GoldenStripBox/>
      <GreenBox />
      <MiddleGoldenBox>{component}</MiddleGoldenBox>
      <GreenBox />
      <GoldenStripBox/>
      <BlueBox />
      <GoldenStripBox/>
      <RedBox />
      <Ends
        style={{
          background: "radial-gradient(at 0, #e6ac00 20%, #8c7300)",
          borderRadius: "30% 100% 100% 30%",
        }}
      />
      <Circle
        style={{
          background: "radial-gradient(at 0%, #e6ac00 20%, #8c7300)",
          marginLeft: "-2px",
        }}
      />
    </ButtonBox>
  );
};

export default NavButton;
