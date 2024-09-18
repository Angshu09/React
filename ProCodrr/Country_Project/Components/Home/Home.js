import { useState } from "react";
import Search from "../Search/Search";
import SelectMenu from "../SelectMenu/SelectMenu";
import CountriesContainer from "../CountriesContainer/CountriesContainer";
import { useTheme } from "../../Hooks/useTheme";

export default function Home() {
  const [query, setQuery] = useState("");

  const [isDark] = useTheme();

  return (
    <>
      <main className={`${isDark ? "dark" : ""}`}>
        <div className="search-filter-container">
          <Search setQuery={setQuery} />
          <SelectMenu setQuery={setQuery} />
        </div>
        <CountriesContainer query={query} />
      </main>
    </>
  );
}
