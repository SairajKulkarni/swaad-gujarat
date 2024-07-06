import { Box, styled } from "@mui/material";

import RightAligned from "../components/content/RightAligned";
import Info from "../components/content/Info";

import { craftsData } from "../constants/data";

const CraftsBox = styled(Box)({
  background: "url(12864.jpg) center/170% repeat-y",
  marginTop: "55px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  padding: "20px 0px",
});

const Crafts = () => {
  const imageUrl =
    "https://t4.ftcdn.net/jpg/05/52/41/89/360_F_552418952_ZgstCN2vdIT5BwZlE8nNEwRm3XtGKhqT.jpg";

  const heading = "Artistic Marvels of Gujarat: The Enchanting Crafts";
  const text =
    "Gujarat's crafts are a testimony to the state's artistic brilliance and skilled craftsmanship. Embark on a journey through the intricate world of Kutchi embroidery, renowned for its vibrant colors and elaborate designs. Admire the breathtaking Bandhani textiles, a traditional tie and dye artistry. The mesmerizing Patola sarees, created using a complex double-ikat technique, are a treasure to behold. Experience the art of Wood Carving, showcased in intricate doors and panels. Witness the skilled artisans crafting stunning Pottery and the beautiful Bell Metal crafts. Gujarat's diverse crafts reflect the essence of its culture and heritage, captivating art lovers worldwide.";
  return (
    <CraftsBox>
      <Info imageUrl={imageUrl} heading={heading} text={text}/>
      {craftsData.map((item) => (
        <RightAligned data={item} key={item.key} colour={"#912E54"} />
      ))}
    </CraftsBox>
  );
};

export default Crafts;
