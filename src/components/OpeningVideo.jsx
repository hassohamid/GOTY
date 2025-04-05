import Divider from "@mui/material/Divider";

export default function OpeningVideo() {
  return (
    <div>
      <video
        className="openingvid"
        autoPlay
        muted
        loop
        src="/corped.mp4"
      ></video>
      <div className="openingmsg"> Overview</div>
      <Divider variant="insent" style={{ margin: "20px" }} />
    </div>
  );
}
