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
      progressClassName="toast-progress-bar"
      toastStyle={{
        borderRadius: "10px",
        background: "white",
        color: "black",
        padding: "1.5rem",
        margin: "8px",
        textAlign: "center",
        fontFamily: "Roboto, sans-serif",
        fontSize: "1.2rem",
      }}
      closeButton={false}
      style={{
        "--toastify-color-progress-success": "#FF3D47",
        "--toastify-color-progress-bar": "#FF3D47",
      }}
      limit={3}
    />
  );
};

export default ToastConfig;
