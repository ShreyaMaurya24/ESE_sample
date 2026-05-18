import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/add">Add Candidate</Link>
      <Link to="/job">Job Form</Link>
      <Link to="/shortlisted">Shortlisted</Link>
      <Link to="/saved">Saved</Link>
    </div>
  );
}

export default Navbar;