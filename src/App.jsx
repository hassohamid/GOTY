import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./layout/header.jsx";
import Overview from "./components/Overview.jsx";

function App() {
  return (
    <>
      <div className="bg">
        <Header />
        <Overview />
      </div>
    </>
  );
}

export default App;
