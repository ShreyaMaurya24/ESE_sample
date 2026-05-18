import { useState } from "react";
import axios from "axios";

function CandidateCard({ candidate }) {

  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);
  const generateQuestions = async () => {

  try {

    setLoading(true);

    const res = await axios.post(
      "https://ai-hiring-backend-zuu1.onrender.com/api/interview",
      {
        skills: candidate.skills
      }
    );

    setQuestions(res.data.questions);

  } catch (error) {

    console.log(error);

    alert("Error Generating Questions");

  } finally {

    setLoading(false);
  }
};

  

  return (

    <div className="card">

      <h2>{candidate.name}</h2>

      <p>
        <strong>Email:</strong>
        {" "}
        {candidate.email}
      </p>

      <p>
        <strong>Skills:</strong>
        {" "}
        {candidate.skills.join(", ")}
      </p>

      <p>
        <strong>Experience:</strong>
        {" "}
        {candidate.experience} years
      </p>

      <p>
        <strong>Bio:</strong>
        {" "}
        {candidate.bio}
      </p>

      <button onClick={generateQuestions}>

        {
          loading
          ? "Generating..."
          : "Generate Interview Questions"
        }

      </button>

      {
        questions && (

          <div
            style={{
              marginTop: "15px",
              background: "#f0f0f0",
              padding: "10px",
              borderRadius: "10px"
            }}
          >

            <h3>AI Interview Questions</h3>

            <pre
              style={{
                whiteSpace: "pre-wrap"
              }}
            >
              {questions}
            </pre>

          </div>
        )
      }

    </div>
  );
}

export default CandidateCard;