import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./layout/header.jsx";
import ProductCard from "./components/ProductCard.jsx";
import OpeningVideo from "./components/OpeningVideo.jsx";
import ToastConfig from "./components/ToastConfig.jsx";

function App() {
  return (
    <>
      <div className="bg">
        <Header />
        <OpeningVideo />
        <ProductCard />
        <ToastConfig />
      </div>
    </>
  );
}

export default App;
