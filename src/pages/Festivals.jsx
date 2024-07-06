import { Box, styled } from "@mui/material";

import RightAligned from "../components/content/RightAligned";
import Info from "../components/content/Info";

import { festivalData } from "../constants/data";

const FestivalBox = styled(Box)({
  background: "url(5545982.jpg) center/170% repeat-y",
  marginTop: "55px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  padding: "20px 0px",
});

const Festivals = () => {
  const imageUrl =
    "https://www.adotrip.com/public/images/blogs/master_images/60fa945b3b361-10_Festivals_Of_Gujarat.jpg";
  const heading = "Welcome to Gujarat's Vibrant Festivals";
  const text =
    "Gujarat, known for its rich cultural heritage, celebrates a variety of royal festivals with great fervor. The state's vibrant Navratri festival draws people from all over to partake in energetic Garba dances, while Uttarayan (Kite Festival) fills the skies with colorful kites. Diwali illuminates the streets with dazzling lights, and Rann Utsav showcases the enchanting beauty of the white desert. These festivals unite people, reflecting Gujarat's warmth, hospitality, and deep-rooted traditions.";
  return (
    <FestivalBox>
      <Info imageUrl={imageUrl} heading={heading} text={text} />
      {festivalData.map((item) => (
        <RightAligned data={item} key={item.key} colour={"#174A7E"} />
      ))}
    </FestivalBox>
  );
};

export default Festivals;
