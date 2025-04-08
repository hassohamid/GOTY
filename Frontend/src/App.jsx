import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Onboarding from "./pages/Onboarding";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Onboarding />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
