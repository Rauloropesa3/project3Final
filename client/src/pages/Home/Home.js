import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./Home.css";
import useReactRouter from "use-react-router";

import { TopNav } from "./TopNav/TopNav";
import { SearchBar } from "./SearchBar/SearchBar";
import { SearchSuggestion } from "./SearchSuggestion/SearchSuggestion";

export function LandingPage() {
  const { history } = useReactRouter();
}

function search(term, location) {
  const urlEncodeTerm = encodeURI(term);
  const urlEncodeLocation = encodeURI(location);
  history.push(
    `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    );
  }
  return (
    <div>
      <div className={styles.landing}>
        <TopNav />
        <div className={styles["search-area"]}>
          <img src={logo} alt="logo" className={styles.logo} />
          <SearchBar search={search} />
          <SearchSuggestion />
        </div>
      </div>
      <BackgroundSlideshow className={styles["image-slider"]} />
    </div>
  );



