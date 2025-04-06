import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 1,
        mt: "3rem",
        backgroundColor: "rgb(255, 102, 0)",
        color: "white",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center" fontWeight={500}>
          Crafted with 🤍 by HASSO
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <IconButton
            component={Link}
            href="https://github.com/hassohamid"
            target="_blank"
            color="inherit"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component={Link}
            href="https://linkedin.com/in/hassohamid"
            target="_blank"
            color="inherit"
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
