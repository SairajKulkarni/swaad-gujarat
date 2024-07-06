import { Box, Typography, styled } from "@mui/material";

const IntroBox = styled(Box)({
  padding: "24px",
  backgroundColor: "#F5DBB9",
  borderRadius: "8px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  width: "60%",
  margin: "30px"
});

const HeadingText = styled(Typography)({
  fontSize: "28px",
  fontWeight: "bold",
  color: "#FF5733",
  textAlign: "center"
});

const IntroText = styled(Typography)({
  fontSize: "16px",
  color: "#333",
  textAlign: "justify", // Add text alignment as justify
  marginTop: "16px",
});

const Intro = () => {
  const gujaratiHeading = "પધારો અમારા ઘર અંગણે";
  const gujaratiText =
    "Welcome to Gujarat, India's vibrant western gem! Immerse yourself in a kaleidoscope of culture, history, geography, and heritage. Home to ancient Indus Valley civilizations, Gujarat boasts captivating archaeological wonders like the Lothal ruins. Rich maritime trade, revered by Gujaratis, dates back centuries. Celebrated festivals like Navratri and vibrant Garba dances showcase their fervent spirit. Discover the breathtaking landscapes of the Rann of Kutch and Gir Forest, abode of majestic Asiatic lions. Witness centuries-old temples, intricate handicrafts, and lip-smacking Gujarati cuisine. Gujarat's legacy resonates in Mahatma Gandhi's birthplace, Sabarmati Ashram. Experience an extraordinary tapestry of tradition, offering unforgettable memories!";

  return (
    <IntroBox>
      <HeadingText variant="h3">{gujaratiHeading}</HeadingText>
      <br />
      <IntroText>{gujaratiText}</IntroText>
    </IntroBox>
  );
};

export default Intro;