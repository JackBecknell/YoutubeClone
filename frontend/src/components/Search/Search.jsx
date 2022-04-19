import React from "react";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("submitted!");
    navigate("/");
  };

  return (
    <div>
      <div className="search-container">
        <div className="search-form">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Search"
              type="text"
              value={props.searchTerm}
              onChange={(event) => props.setSearchTerm(event.target.value)}
            />
            <button
              className="button-holder"
              type="Submit"
              style={{ cursor: "pointer" }}
            >
              <img src="assets/magglass.png" alt="magnifgying glass icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
