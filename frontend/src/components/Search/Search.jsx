import React from "react";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search"
          type="text"
          value={props.searchTerm}
          onChange={(event) => props.setSearchTerm(event.target.value)}
        />
        <button type="Submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
