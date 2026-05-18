import { useState } from "react";
import axios from "axios";

function AddCandidate() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
    bio: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCandidate = {
      ...form,
      skills: form.skills.split(",")
    };

    await axios.post(
      "http://localhost:5000/api/candidates",
      newCandidate
    );

    alert("Candidate Added");

    setForm({
      name: "",
      email: "",
      skills: "",
      experience: "",
      bio: ""
    });
  };

  return (
    <div className="container">

      <h1>Add Candidate</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills (React,Node.js)"
          value={form.skills}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="experience"
          placeholder="Experience"
          value={form.experience}
          onChange={handleChange}
          required
        />

        <textarea
          name="bio"
          placeholder="Projects / Bio"
          value={form.bio}
          onChange={handleChange}
        />

        <button type="submit">
          Add Candidate
        </button>

      </form>

    </div>
  );
}

export default AddCandidate;