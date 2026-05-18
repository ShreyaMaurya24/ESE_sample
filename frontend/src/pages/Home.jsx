import { useEffect, useState } from "react";
import axios from "axios";
import CandidateCard from "../components/CandidateCard";

function Home() {

  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchCandidates();

  }, []);

  const fetchCandidates = async () => {

    const res = await axios.get(
      "https://ai-hiring-backend-zuu1.onrender.com/api/candidates"
    );

    setCandidates(res.data);
  };

  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(search.toLowerCase()) ||
    candidate.skills.join(",").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>All Candidates</h1>

      <input
        type="text"
        placeholder="Search by skill or name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {
        filteredCandidates.map((candidate, index) => (
          <CandidateCard
            key={index}
            candidate={candidate}
          />
        ))
      }

    </div>
  );
}

export default Home;