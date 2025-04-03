import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Card() {
  return (
    <Box sx={{ maxWidth: "100%", overflow: "hidden" }}>
      <Grid
        container
        spacing={2}
        sx={{
          padding: 2,
          margin: 0,
          width: "100%",
        }}
      >
        {itemData.map((item) => (
          <Grid
            item
            xs={12} // 1 item per row on extra-small screens
            sm={6} // 2 items per row on small screens
            md={4} // 3 items per row on medium and up screens
            key={item.img}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                width: "100%",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const itemData = [
  {
    img: "/src/img/6.png",
    title: "Nike",
  },
  {
    img: "/src/img/5.png",
    title: "Nike",
  },
  {
    img: "/src/img/1.png",
    title: "Nike",
  },
  {
    img: "/src/img/10.png",
    title: "Nike",
  },
  {
    img: "/src/img/6.png",
    title: "Nike",
  },
  {
    img: "/src/img/5.png",
    title: "Nike",
  },
  {
    img: "/src/img/1.png",
    title: "Nike",
  },
  {
    img: "/src/img/10.png",
    title: "Nike",
  },
  {
    img: "/src/img/6.png",
    title: "Nike",
  },
  {
    img: "/src/img/5.png",
    title: "Nike",
  },
  {
    img: "/src/img/1.png",
    title: "Nike",
  },
  {
    img: "/src/img/10.png",
    title: "Nike",
  },
  {
    img: "/src/img/6.png",
    title: "Nike",
  },
  {
    img: "/src/img/5.png",
    title: "Nike",
  },
  {
    img: "/src/img/1.png",
    title: "Nike",
  },
  {
    img: "/src/img/10.png",
    title: "Nike",
  },
];
