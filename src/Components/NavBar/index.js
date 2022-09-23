import { Icon } from "../../globalStyles";
import LandscapeIcon from "@mui/icons-material/Landscape";
import PersonIcon from "@mui/icons-material/Person";
import { Stack } from "@mui/system";
import { AppBar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      sx={{ padding: "5px 10px", paddingLeft: 8, background: "#FFF" }}
      position="fixed"
      open={true}
    >
      <Stack direction="row" justifyContent="space-between">
        <div>
          <Icon onClick={() => navigate("/")} width="80px" fill="#808080">
            <LandscapeIcon fontSize="large" />
          </Icon>
        </div>
        <Stack direction="row" spacing={2} alignItems="center">
          <Stack>
            <Typography fontSize={18} fontWeight={500} color="#808080">
              RENEE MCKLEVEY
            </Typography>
            <Typography fontSize={16} fontWeight={400} color="#afafaf">
              Account Settings
            </Typography>
          </Stack>
          <Icon
            width="50px"
            height="50px"
            fill="#808080"
            style={{
              border: "1px solid #808080",
              borderRadius: "50%",
            }}
          >
            <PersonIcon />
          </Icon>
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default NavBar;
