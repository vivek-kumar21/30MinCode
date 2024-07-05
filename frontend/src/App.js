import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import Navbar from "./components/Navbar";
import LanguageDetails from "./pages/LanguageDetails";
import CodeCompiler from "./pages/CodeCompiler";
import Faqs from "./pages/Faqs";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/learn" element={<Learning />} />
        <Route path="/learn/:id" element={<LanguageDetails />} />
        <Route path="/ide" element={<CodeCompiler />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/quiz/:lang" element={<Quiz />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
