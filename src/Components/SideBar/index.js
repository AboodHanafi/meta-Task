import { Icon } from "../../globalStyles";
import { SideBarIcons } from "../Assests";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { Divider, IconButton } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const closedMixin = (theme) => ({
  transition: theme.transitions.create("all", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  [theme.breakpoints.down("sm")]: {
    width: 0,
    position: "fixed",
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: 20,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(true && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideBar = () => {
  return (
    <Drawer variant="permanent" open={true}>
      <DrawerHeader>
        <IconButton onClick={() => null}>
          <MenuIcon fontSize="large" />
        </IconButton>
      </DrawerHeader>
      <Divider />
      {SideBarIcons.map((item) => {
        return (
          <Icon key={item.id} id={item.name}>
            {item.icon}
          </Icon>
        );
      })}
    </Drawer>
  );
};

export default SideBar;
