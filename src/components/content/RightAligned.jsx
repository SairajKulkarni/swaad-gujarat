import { Box, Typography, Grid, styled } from "@mui/material";

const RightAlignedBox = styled(Box)(({ theme }) => ({
  width: "75%",
  display: "flex",
  borderRadius: "20px",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

const TextGrid = styled(Grid)({
  padding: "30px",
  borderRadius: "20px",
});

const HeadingText = styled(Typography)(({ theme }) => ({
  color: "white",
  [theme.breakpoints.down("lg")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "18px",
  margin: "15px 0px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "16px",
  },
}));

const RightAligned = ({ data, colour }) => {
  return (
    <RightAlignedBox style={{ background: colour }}>
      <Grid container>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <img
            src={data.url}
            alt={data.heading}
            style={{
              height: "auto",
              width: "100%",
              transform: "scale(90%)",
              borderRadius: "10%",
            }}
          />
        </Grid>
        <TextGrid
          item
          lg={8}
          md={8}
          sm={12}
          xs={12}
          style={{ background: colour }}
        >
          <HeadingText variant="h4">{data.heading}</HeadingText>
          <Text>{data.text}</Text>
        </TextGrid>
      </Grid>
    </RightAlignedBox>
  );
};

export default RightAligned;
