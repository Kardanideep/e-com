// import React, { useState, Fragment } from "react";
// import MetaData from "../layout/Metadata";
// import {useNavigate} from "react-router-dom";
// import "./Search.css";



// const Search = () => {
//   const [keyword, setKeyword] = useState("");

  
//   const history = useNavigate();

//   const searchSubmitHandler = (e) => {
//     e.preventDefault();
//     if (keyword.trim()) {
//       history(`products/${keyword}`);
//     } else {
//       history("/products");
//     }
//   };

//   return (
//     <Fragment>
//       <MetaData title="Search A Product -- QuickCard" />
//       <form className="searchBox" onSubmit={searchSubmitHandler}>
//         <input
//           type="text"
//           placeholder="Search a Product ..."
//           onChange={(e) => setKeyword(e.target.value)}
//         />
//         <input type="submit" value="Search" />
//       </form>
//     </Fragment>
//   );
// };

// export default Search;

import React, { useState, Fragment } from "react";
import MetaData from "../layout/Metadata";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const history = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history(`products/${keyword}`);
    } else {
      history("/products");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search a Product — QuickCard" />
      <div className="searchContainer">
        <form className="searchForm" onSubmit={searchSubmitHandler}>
          <input
            type="text"
            placeholder="Search for products..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Search;
