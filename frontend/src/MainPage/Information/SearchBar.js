import React, { useState } from "react";
import { ThemeColors } from "../../CommonStyles/MyStyles";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (event) => {
    const query = event.target.value;

    setSearchTerm(query);

    const filteredItems = props.data.filter(
      (item) => item.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    setFilteredData(filteredItems);
  };

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid black",
        padding: "10px",
        borderRadius: "5px",
        width: "500px",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
        style={{
          flex: 1,
          marginRight: "10px",
          border: "none",
          outline: "none",
        }}
      />
      <div
        style={{
          background: ThemeColors.themeColor,
          padding: "5px 15px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => alert("Search triggered")}
      >
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
