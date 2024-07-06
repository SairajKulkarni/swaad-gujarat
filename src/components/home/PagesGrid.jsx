import { Box, Grid, styled } from "@mui/material";
import GridCard from "./GridCard";

import { gridData } from "../../constants/data";

import { Link } from "react-router-dom";

const GridBox = styled(Box)({
  width: "75%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const WrapperGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const PagesGrid = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <GridBox>
      <WrapperGrid container spacing={"60px"}>
        {gridData.map((data) => (
          <Grid item lg={5} md={5} sm={8} xs={12} key={data.key}>
            <Link to={data.link} onClick={goToTop} style={{textDecoration: "none"}}>
              <GridCard url={data.url} text={data.text} />
            </Link>
          </Grid>
        ))}
      </WrapperGrid>
    </GridBox>
  );
};

export default PagesGrid;
