import { IconButton } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import { useState } from "react";

export default function SetFavorite() {
  const [isHot, setIsHot] = useState(false);

  return (
    <IconButton
      onClick={() => setIsHot(!isHot)}
      sx={{
        position: "absolute",
        top: 8,
        right: 8,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(4px)",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 1)",
          transform: "scale(1.1)",
        },
        padding: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        transition: "all 0.2s ease-in-out",
      }}
    >
      {isHot ? (
        <LocalFireDepartmentIcon sx={{ color: "rgb(255, 0, 0)" }} />
      ) : (
        <LocalFireDepartmentOutlinedIcon sx={{ color: "#666" }} />
      )}
    </IconButton>
  );
}
