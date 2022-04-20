import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import "../Search/Search.css";
import Search from "../Search/Search";

const Navbar = (props) => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/">
            <img src={"./assets/youtubeicon.png"} alt="youtube-icon" />
          </Link>
        </li>
        <li>
          <Search
            searchTerm={props.searchTerm}
            setStartSearch={props.setStartSearch}
            setSearchTerm={props.setSearchTerm}
          />
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
