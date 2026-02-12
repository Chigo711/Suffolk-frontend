import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import HomeDetails from "./pages/HomeDetails.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartment/:id" element={<HomeDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
