import { Box, styled } from "@mui/material";

import RightAligned from "../components/content/RightAligned";
import Info from "../components/content/Info";

import { cuisineData } from "../constants/data";

const CuisineBox = styled(Box)({
  background: "url(luxury_beauty_floral_background.jpg) center/190% repeat-y",
  marginTop: "55px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  padding: "20px 0px",
});

const Cuisine = () => {
  const imageUrl = "https://images.slurrp.com/prod/articles/mpc4f36pa6.webp";
  const heading = "Gujarat's Delightful Cuisine: A Gastronomic Adventure";
  const text =
    "Gujarati cuisine is a harmonious blend of flavors, offering a unique experience for food enthusiasts. From the sweet and tangy Dhokla, mouth-watering Khandvi, and crunchy Fafda to the delectable Undhiyu and the evergreen Thepla, each dish showcases the richness of Gujarat's culinary heritage. Savor the traditional Gujarati Thali, a feast comprising a variety of wholesome dishes. Don't miss the divine sweetness of Gujarati desserts like the Ghari and the delectable Mohanthal. Gujarat's culinary journey will leave you craving for more!";
  return (
    <CuisineBox>
      <Info imageUrl={imageUrl} heading={heading} text={text}/>
      {cuisineData.map((item) => (
        <RightAligned data={item} key={item.key} colour={"#422D53"}/>
      ))}
    </CuisineBox>
  );
};

export default Cuisine;
