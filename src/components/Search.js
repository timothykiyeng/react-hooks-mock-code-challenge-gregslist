import React from "react";

function Search({onSearchChange, search, setSearch}) {


  function handleSubmit(e) {
    e.preventDefault();
    setSearch(search)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={onSearchChange}
      />
      <button  type="button">🔍</button>
    </form>
  );
}

export default Search;
