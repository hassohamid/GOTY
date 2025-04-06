import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastConfig = () => {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={2300}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Flip}
      icon={false}
      progressStyle={{ background: "#ff6d75" }}
      toastStyle={{
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        padding: "1.5rem",
        margin: "8px",
        textAlign: "center",
        fontFamily: "Roboto, sans-serif",
      }}
      closeButton={false}
    />
  );
};

export default ToastConfig;
