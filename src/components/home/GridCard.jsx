import { Box, Typography, styled } from "@mui/material";

const GridItemBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  boxShadow: "0px 0px 15px black",
  [theme.breakpoints.down("md")]: {
    width: "auto",
    height: "200px"
  }
}));

const GridText = styled(Typography)({
  fontSize: "40px",
  color: "white",
  textShadow: "0px 0px 10px white",
});

const GridCard = ({ url, text }) => {
  return (
    <GridItemBox style={{ background: `url(${url}) top/210% no-repeat` }}>
      <GridText>{text}</GridText>
    </GridItemBox>
  );
};

export default GridCard;
