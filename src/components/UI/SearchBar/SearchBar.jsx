import useOrderData from "../../../hooks/useOrderData";
import { SearchIcon } from "../SVG/Svg";
import styles from "./SearchBar.module.css";

export function SearchBar() {
  const { query, setQuery } = useOrderData();
  return (
    <div className={styles.searchbar}>
      <input
        type="search"
        name="search-bar"
        id="search-bar"
        placeholder="Search..."
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchIcon />
    </div>
  );
}
