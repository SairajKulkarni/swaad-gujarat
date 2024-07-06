import { Typography, Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavButtonMenu = () => {
  const handleMenuOpen = (e) => {
    setMenuOpen(e.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Button
        style={{
          height: "17px",
          width: "70px",
          color: "white",
          textTransform: "none",
          marginTop: "-6px",
        }}
        onClick={handleMenuOpen}
      >
        <Typography style={{ display: "flex", alignItems: "center" }}>
          More <ArrowDropDownIcon fontSize="xs" />
        </Typography>
      </Button>
      <Menu
        anchorEl={menuOpen}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(menuOpen)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"/crafts"}
          >
            Crafts
          </Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"cuisine"}
          >
            Cuisine
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default NavButtonMenu;
