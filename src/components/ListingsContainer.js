import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ displayListings }) {
  return (
    <main>
      <ul className="cards">
        {displayListings.map((listings) => (
          <ListingCard key={listings.id} listings={listings} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
