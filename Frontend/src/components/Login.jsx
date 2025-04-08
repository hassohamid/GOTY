import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { Tooltip, InputAdornment, Paper } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background:
          "linear-gradient(135deg, rgb(202, 149, 149) 0%, rgb(202, 26, 255) 50%, rgb(251, 134, 255) 100%)",
      }}
      noValidate
      autoComplete="off"
    >
      <Paper
        component={motion.div}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        elevation={10}
        sx={{
          padding: 4,
          borderRadius: 2,
          backgroundImage: "url('/BG2.jpg')",
          width: "350px",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "300px" },
            "& .MuiInputLabel-root": {
              fontSize: "0.875rem",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="login-form">
            <TextField
              id="filled-password-input"
              label="Id"
              variant="filled"
              sx={{
                backgroundColor: "white",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            />

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <TextField
                id="filled-password-input"
                label="Secret Key"
                type="password"
                autoComplete="current-password"
                variant="filled"
                sx={{
                  backgroundColor: "white",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
              />
              <Tooltip
                title="Your secret key is a unique identifier provided by the admin"
                placement="right-start"
                arrow
              >
                <QuestionMarkIcon
                  sx={{
                    color: "grey",
                    borderRadius: "100%",
                    border: "solid 0.5px black",
                    backgroundColor: "white",
                    padding: "2px",
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </Tooltip>
            </Box>
          </div>
          <Link to="/home">
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="outlined"
              endIcon={<LoginIcon />}
              size="large"
              sx={{
                mt: 1,
                backgroundColor: "rgb(17, 17, 17)",
                color: "white",
                border: "none",
                transition: "background-color 0.3s ease",
                ":hover": {
                  backgroundColor: "rgb(31, 31, 31)",
                  color: "white",
                },
              }}
            >
              Login
            </Button>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
}
