import { Box, styled } from "@mui/material";

import RightAligned from "../components/content/RightAligned";
import Info from "../components/content/Info";

import { historyData } from "../constants/data";

const HistoryBox = styled(Box)({
  background: "url(38635.jpg) center/190% repeat-y",
  marginTop: "55px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  padding: "20px 0px",
});

const History = () => {
  const imageUrl =
    "https://static.theprint.in/wp-content/uploads/2021/02/SARKHEJ_ROZA_AHMEDABAD_INDIA.jpg";
  const heading =
    "Exploring Gujarat's Glorious Past: A Tapestry of Legends and Kings";
  const text =
    "Gujarat, a state rich in history, has an illustrious past entwined with rulers and tales. It was the region of the ancient city of Dwarka, a representation of spiritual value, where Lord Krishna lived. Gujarat has seen the birth of great dynasties over the years, like the Solankis and the Chaulukyas, who left behind architectural wonders like the Rani Ki Vav stepwell and the Sun Temple of Modhera. The marine trade of the realm prospered, drawing the interest of dynasties like the Mauryas and the Mughals. Gujarat's fascinating history incorporates a confluence of civilizations and has made a lasting impression on India's historical fabric.";
  return (
    <HistoryBox>
      <Info imageUrl={imageUrl} heading={heading} text={text} />
      {historyData.map((item) => (
        <RightAligned data={item} key={item.key} colour={"#F4c430"} />
      ))}
    </HistoryBox>
  );
};

export default History;
