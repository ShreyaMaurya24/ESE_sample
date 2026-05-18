import React from "react";

import MatchCard from "../components/MatchCard";
import MatchChart from "../components/MatchChart";

function Shortlisted() {

  const candidates =
    JSON.parse(localStorage.getItem("shortlisted")) || [];

  return (

    <div className="container">

      <h1>Shortlisted Candidates</h1>

      {
        candidates.length > 0 && (
          <MatchChart data={candidates} />
        )
      }

      {
        candidates.length === 0
        ? (
          <p>No Candidates Found</p>
        )
        : (
          candidates.map((candidate, index) => (

            <MatchCard
              key={index}
              candidate={candidate}
            />

          ))
        )
      }

    </div>
  );
}

export default Shortlisted;