import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeButtonComponent from "./HomeButtonComponent";
import { CenterContainer } from "./ViewComponents";

function Categories() {
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://www.mocky.io/v2/5ce287fe340000ad3a773515")
      .then(response => {
        setCategories([...new Set(response.data.words.map(x => x.category))]);
        setLoading(false);
      });
  }, []);

  return (
    <CenterContainer>
      <HomeButtonComponent />
      {isLoading ? (
        "Loading categories..."
      ) : (
        <ul>
          {categories.map((category, index) => {
            return <li key={index}>{category}</li>;
          })}
        </ul>
      )}
    </CenterContainer>
  );
}

export default Categories;
