import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CustomizedRating from "./CustomizedRating";

export default function ProductCard() {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        padding: { xs: 2, md: 7 }, // Reduced padding on mobile

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
              maxWidth: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.01)",
                boxShadow: 3,
              },
              textTransform: "uppercase",
              margin: "0 auto",
            }}
          >
            <CardMedia
              component="img"
              height="250"
              image={item.img}
              alt={item.title}
              sx={{ objectFit: "cover", width: "100%" }}
            />
            <CardContent>
              <Typography variant="h6" component="div" align="center">
                {item.title}
              </Typography>
              <CustomizedRating />
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
    title: "Nike",
  },
  {
    img: "/5.png",
    title: "Nike",
  },
  {
    img: "/1.png",
    title: "Nike",
  },
  {
    img: "/10.png",
    title: "Nike",
  },
  {
    img: "/6.png",
    title: "Nike",
  },
  {
    img: "/5.png",
    title: "Nike",
  },
  {
    img: "/1.png",
    title: "Nike",
  },
  {
    img: "/10.png",
    title: "Nike",
  },
  {
    img: "/6.png",
    title: "Nike",
  },
  {
    img: "/5.png",
    title: "Nike",
  },
  {
    img: "/1.png",
    title: "Nike",
  },
  {
    img: "/10.png",
    title: "Nike",
  },
  {
    img: "/6.png",
    title: "Nike",
  },
  {
    img: "/5.png",
    title: "Nike",
  },
  {
    img: "/1.png",
    title: "Nike",
  },
];
