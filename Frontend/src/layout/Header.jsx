import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { HomeRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "rgb(242, 0, 255)" }}>
      <Container>
        <Toolbar disableGutters>
          <Link to="/">
            <IconButton>
              <HomeRounded
                sx={{
                  color: "white",
                  fontSize: 28,
                  "&:hover": {
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                }}
              />
            </IconButton>
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <Tooltip title="Profile">
            <IconButton sx={{ p: 0 }}>
              <Avatar
                alt="Hasso"
                src="/KiNG.jpg"
                sx={{
                  width: 40,
                  height: 40,
                }}
              />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
