import { Typography, Button } from "@mui/material";

const NavButtonComponent = ({ text }) => {
  return (
    <Button
      style={{
        height: "15px",
        width: "70px",
        color: "white",
        textTransform: "none",
        marginTop: "-6px"
      }}
    >
      <Typography>{text}</Typography>
    </Button>
  );
};

export default NavButtonComponent;
