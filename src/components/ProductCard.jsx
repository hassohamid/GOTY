import * as React from "react";
import Grid from "@mui/material/Grid";
import CustomizedRating from "./CustomizedRating";

export default function ProductCard() {
  return (
    <>
      <Grid container spacing={6} sx={{ padding: 2, overflow: "hidden" }}>
        {itemData.map((item) => (
          <Grid item xs={12} sm={6} md={2} key={item.img}>
            <div className="product-card">
              <div
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    maxWidth: "250px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
                <h1 className="product-title">{item.title}</h1>
              </div>
              <CustomizedRating />
            </div>
          </Grid>
        ))}
      </Grid>
    </>
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
