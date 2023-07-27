import axios from "axios";
import React, { useState } from "react";

import './/Search.css'; // Import the CSS file for Search component (you can name it as per your preference)

const Search = ({ setInfo }) => {
  let [searchItem, setSearchItem] = useState("");

  const getImages = async () => {
    try {
      const request = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          // Your request parameters
          query: searchItem || "nature",
        },
        headers: {
          Authorization: 'Client-ID rwfxxU22ed_e_LmZ3WImpvLWQ6AjYCRHY3AySikPELY',
        },
      });

      // Handle the response
      console.log(request.data);
      setInfo(request.data.results);
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  return (
    <div className="search-container"> {/* Add a container class */}
      <input
      placeholder="Search image"
        type="text"
        name=""
        id=""
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button onClick={getImages}>Search</button>
    </div>
  );
};

export default Search;
