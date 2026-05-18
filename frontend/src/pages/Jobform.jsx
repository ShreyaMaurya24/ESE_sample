import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function JobForm() {

  const navigate = useNavigate();

  const [job, setJob] = useState({
    requiredSkills: "",
    minExperience: ""
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await axios.post(
      "http://localhost:5000/api/match",
      {
        requiredSkills:
          job.requiredSkills.split(","),
        minExperience:
          job.minExperience
      }
    );

    localStorage.setItem(
      "shortlisted",
      JSON.stringify(response.data)
    );

    navigate("/shortlisted");
  };

  return (
    <div className="container">

      <h1>Job Requirement Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="requiredSkills"
          placeholder="Required Skills"
          value={job.requiredSkills}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="minExperience"
          placeholder="Minimum Experience"
          value={job.minExperience}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Shortlist Candidates
        </button>

      </form>

    </div>
  );
}

export default JobForm;