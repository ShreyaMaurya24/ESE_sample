function SavedCandidates() {

  const saved =
    JSON.parse(localStorage.getItem("saved")) || [];

  return (
    <div className="container">

      <h1>Saved Candidates</h1>

      {
        saved.length === 0
        ? <p>No Saved Candidates</p>
        : saved.map((candidate, index) => (

          <div className="card" key={index}>

            <h2>{candidate.name}</h2>

            <p>
              Match Score:
              {candidate.matchScore}%
            </p>

          </div>
        ))
      }

    </div>
  );
}

export default SavedCandidates;