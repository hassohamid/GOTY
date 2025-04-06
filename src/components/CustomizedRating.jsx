import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { toast } from "react-toastify";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export default function CustomizedRating({ title }) {
  const handleRating = (event, newValue) => {
    const rating = newValue ?? "0"; // Default to 0 if newValue is null

    const getIcon = (rating) => {
      const iconStyle = {
        fontSize: "1.5rem",
        verticalAlign: "middle",
        marginRight: "4px",
      };

      switch (rating) {
        case 5:
          return (
            <LocalFireDepartmentIcon sx={{ ...iconStyle, color: "#ff3d47" }} />
          );
        case 4:
          return <StarIcon sx={{ ...iconStyle, color: "#ffd700" }} />;
        case 3:
          return <ThumbUpAltIcon sx={{ ...iconStyle, color: "#4caf50" }} />;
        case 2:
          return (
            <SentimentNeutralIcon sx={{ ...iconStyle, color: "#ff9800" }} />
          );
        case 1:
          return (
            <SentimentDissatisfiedIcon
              sx={{ ...iconStyle, color: "#f44336" }}
            />
          );
        default:
          return <HeartBrokenIcon sx={{ ...iconStyle, color: "#9e9e9e" }} />;
      }
    };

    toast.success(
      <div>
        {getIcon(rating)} You rated{" "}
        <span className="product-title-toastify">{title}</span> {rating} star
        {rating !== 1 ? "s" : ""}!
      </div>
    );
  };

  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
        precision={1}
        onChange={handleRating}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box>
  );
}
