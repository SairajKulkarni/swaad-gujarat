import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import NavButton from "./NavButton";
import NavButtonComponent from "./NavButtonComponent";
import NavButtonMenu from "./NavButtonMenu";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import NavButtonDrawer from "./NavButtonDrawer";

const MenuIconButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  marginLeft: "-10px",
  [theme.breakpoints.down("lg")]: {
    display: "block",
  },
}));

const NavButtonBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

const NavLogoBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const Navbar = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [openDrawer, setOpenDrawer] = useState(false);

  const location = useLocation();

  const navColours = {
    "/": "#9c0001",
    "/festivals": "#174A7E",
    "/history": "#F4c430",
    "/crafts": "#912E54",
    "/cuisine": "#422D53",
  };

  return (
    <AppBar style={{minHeight: "55px", background: navColours[location.pathname]}}>
      <Toolbar style={{ minHeight: "55px", justifyContent: "space-between" }}>
        <MenuIconButton
          onClick={() => {
            setOpenDrawer(true);
          }}
        >
          <MenuIcon />
        </MenuIconButton>
        <NavButtonDrawer
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          goToTop={goToTop}
          navColours={navColours}
        />
        <NavLogoBox>
          <img src="logo.png" alt="logo" style={{ height: "40px" }} />
          <Typography color={"white"}>જય ગરવી ગુજરાત</Typography>
        </NavLogoBox>
        <NavButtonBox onClick={goToTop}>
          <Link to={"/"}>
            <NavButton component={<NavButtonComponent text={"Menu"} />} />
          </Link>
          <Link to={"/festivals"}>
            <NavButton component={<NavButtonComponent text={"Festivals"} />} />
          </Link>
          <Link to={"/history"}>
            <NavButton component={<NavButtonComponent text={"History"} />} />
          </Link>
          <NavButton component={<NavButtonMenu />} />
        </NavButtonBox>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
