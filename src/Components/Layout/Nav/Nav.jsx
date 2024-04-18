import { NavLink } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  return (
      <nav className="navbar">
        <NavLink to="/" className="logo">Untitled BLOG</NavLink>
        <NavLink to="/blogs" className="blog-link">
          Blogs
        </NavLink>
      </nav>
  )
}

export default Nav