import React from "react";

function MatchCard({ candidate }) {

  const saveCandidate = () => {

    const saved =
      JSON.parse(localStorage.getItem("saved")) || [];

    saved.push(candidate);

    localStorage.setItem(
      "saved",
      JSON.stringify(saved)
    );

    alert("Candidate Saved");
  };

  return (

    <div className="card">

      <h2>{candidate.name}</h2>

      <p>
        Match Score:
        {candidate.matchScore}%
      </p>

      <p>
        Skills:
        {candidate.matchedSkills.join(", ")}
      </p>

      <p>
        Experience:
        {candidate.experience} years
      </p>

      <button onClick={saveCandidate}>
        Save Candidate
      </button>

    </div>
  );
}

export default MatchCard;