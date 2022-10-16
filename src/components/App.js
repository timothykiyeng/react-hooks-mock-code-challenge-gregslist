import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const apiHost = " http://localhost:6001/listings";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(apiHost)
      .then((res) => res.json())
      .then((items) => setListings(items));
  }, []);

  const listingsToDisplay = listings.filter((listing) => {
    if (search === "") {
      return listing;
    } else if (
      listing.description.toLowerCase().includes(search.toLowerCase())
    ) {
      return listing;
    }
    return false;
  });

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <ListingsContainer displayListings={listingsToDisplay} />
    </div>
  );
}

export default App;
