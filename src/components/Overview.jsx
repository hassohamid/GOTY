import * as React from "react";
import Grid from "@mui/material/Grid";

export default function Overview() {
  return (
    <>
      <div>
        <video
          className="openingvid"
          autoPlay
          muted
          loop
          src="/src/img/corped.mp4"
        ></video>
      </div>
      <div className="openingmsg"> Overview</div>
      <Grid container spacing={6} sx={{ padding: 2, overflow: "hidden" }}>
        {itemData.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            key={item.img}
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
          </Grid>
        ))}
      </Grid>
    </>
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
];
