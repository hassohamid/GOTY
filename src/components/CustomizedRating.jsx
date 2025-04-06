import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { toast } from "react-toastify";

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

    const getEmoji = (rating) => {
      switch (rating) {
        case 5:
          return "🔥";
        case 4:
          return "⭐";
        case 3:
          return "👍";
        case 2:
          return "😐";
        case 1:
          return "😕";
        default:
          return "💔";
      }
    };

    toast.success(
      `${getEmoji(rating)} You rated ${title} ${rating} star${
        rating !== 1 ? "s" : ""
      }!`
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
