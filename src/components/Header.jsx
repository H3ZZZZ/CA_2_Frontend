import "../styles/header.css";
import { NavLink, useLocation } from "react-router-dom";

const Header = (props) => {
//   const location = useLocation();
//   console.log(location);

  return (
    <nav className="navbar">
      <NavLink className="active" to="/">
        <i className="fa fa-fw fa-home"></i> Home
      </NavLink>
      <NavLink to="/search">
        <i className="fa fa-fw fa-search"></i> Search
      </NavLink>
      <NavLink to="/contact">
        <i className="fa fa-fw fa-envelope"></i> Contact
      </NavLink>
      <NavLink to="/login">
        <i className="fa fa-fw fa-user"></i> Login
      </NavLink>
    </nav>
  );
};

export default Header;
