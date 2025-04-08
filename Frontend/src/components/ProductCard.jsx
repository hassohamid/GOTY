import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CustomizedRating from "./CustomizedRating";
import SetFavorite from "./SetFavorite";
import { motion } from "framer-motion";

export default function ProductCard() {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        padding: { xs: 2, md: 7 },
        justifyContent: "center", // Center the grid items
      }}
    >
      {itemData.map((item) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center", // Center the card within grid item
          }}
          key={item.img}
        >
          <Card
            sx={{
              width: "320px",
              height: "400px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 5,
              transition: "0.3s",
              position: "relative", // Add this
              "&:hover": {
                transform: "scale(1.01)",
                boxShadow: 3,
              },
            }}
          >
            <SetFavorite />
            <CardMedia
              component="img"
              height="250"
              image={item.img}
              alt={item.title}
              sx={{ objectFit: "cover", width: "100%" }}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                align="center"
                fontSize={18}
              >
                {item.title}
              </Typography>
              <CustomizedRating title={item.title} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

const itemData = [
  {
    img: "/6.png",
    title: "Nike Air Force 1 '07",
  },
  {
    img: "/5.png",
    title: "Nike Air Force 1 Low",
  },
  {
    img: "/1.png",
    title: "Nike Air Force 1 High",
  },
  {
    img: "/10.png",
    title: "Nike Air Force 1 Shadow",
  },
  {
    img: "/6.png",
    title: "Nike Air Force 1 Wild",
  },
  {
    img: "/5.png",
    title: "Nike Air Force 1 LX",
  },
  {
    img: "/1.png",
    title: "Nike Air Force 1 React",
  },
  {
    img: "/10.png",
    title: "Nike Air Force 1 GTX",
  },
  {
    img: "/6.png",
    title: "Nike Air Force 1 Premium",
  },
  {
    img: "/5.png",
    title: "Nike Air Force 1 Fontanka",
  },
  {
    img: "/1.png",
    title: "Nike Air Force 1 PLT.AF.ORM",
  },
  {
    img: "/10.png",
    title: "Nike Air Force 1 Mid",
  },
  {
    img: "/6.png",
    title: "Nike Air Force 1 Pixel",
  },
  {
    img: "/5.png",
    title: "Nike Air Force 1 Next Nature",
  },
  {
    img: "/1.png",
    title: "Nike Air Force 1 Sage Low",
  },
];
