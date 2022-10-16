import React from "react";
import Search from "./Search";

function Header({ search, setSearch }) {
  const searchListing = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} setSearch={setSearch} onSearchChange={searchListing} />
    </header>
  );
}

export default Header;
