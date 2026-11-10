import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="brand">ReactApp</span>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
}
