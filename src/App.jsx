// ✅ src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Home from "@/pages/Home";
import ResumeStory from "@/components/ResumeStory/ResumeStory";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumeStory />} />
      </Routes>
      <Footer />
    </>
  );
}
