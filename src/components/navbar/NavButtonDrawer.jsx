import { Drawer, List, ListItem, styled } from "@mui/material";

import NavButton from "./NavButton";
import NavButtonComponent from "./NavButtonComponent";

import { Link, useLocation } from "react-router-dom";

const DrawerList = styled(List)({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  marginTop: "15px",
});

const NavButtonDrawer = ({ openDrawer, setOpenDrawer, goToTop, navColours }) => {

  const location = useLocation();

  return (
    <Drawer
      open={openDrawer}
      onClose={() => {
        setOpenDrawer(false);
      }}
      PaperProps={{
        sx: {
          backgroundColor: navColours[location.pathname],
        },
      }}
    >
      <DrawerList>
        <ListItem>
          <Link
            to={"/"}
            onClick={() => {
              setOpenDrawer(false);
              goToTop();
            }}
          >
            <NavButton component={<NavButtonComponent text={"Menu"} />} />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to={"/festivals"}
            onClick={() => {
              setOpenDrawer(false);
              goToTop();
            }}
          >
            <NavButton component={<NavButtonComponent text={"Festivals"} />} />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to={"/history"}
            onClick={() => {
              setOpenDrawer(false);
              goToTop();
            }}
          >
            <NavButton component={<NavButtonComponent text={"History"} />} />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to={"/crafts"}
            onClick={() => {
              setOpenDrawer(false);
              goToTop();
            }}
          >
            <NavButton component={<NavButtonComponent text={"Crafts"} />} />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to={"/cuisine"}
            onClick={() => {
              setOpenDrawer(false);
              goToTop();
            }}
          >
            <NavButton component={<NavButtonComponent text={"Cuisine"} />} />
          </Link>
        </ListItem>
      </DrawerList>
    </Drawer>
  );
};

export default NavButtonDrawer;
