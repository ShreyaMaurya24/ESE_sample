import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AddCandidate from "./pages/AddCandidate";
import JobForm from "./pages/Joform";
import Shortlisted from "./pages/Shortlisted";
import SavedCandidates from "./pages/savedCandidates";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddCandidate />} />
        <Route path="/job" element={<JobForm />} />
        <Route path="/shortlisted" element={<Shortlisted />} />
        <Route path="/saved" element={<SavedCandidates />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;