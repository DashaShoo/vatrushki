import { useState } from "react";
import { SearchIcon } from "../../../assets/icons";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-main-light rounded-lg flex items-center gap-2 px-3 py-2 w-full">
      <SearchIcon className="w-7 h-7 text-main-dark" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full bg-transparent text-main-dark outline-none"
      />
    </div>
  );
};
